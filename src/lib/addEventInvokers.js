import UIkit from 'uikit';
import get from 'lodash/get';
import has from 'lodash/has';
import invoke from 'lodash/invoke';
import isNil from 'lodash/isNil';
import toPairs from 'lodash/toPairs';

/**
 * Adds an event onto the UIkit element from the component props that invokes
 *    the event with the props as an argument that can be included in the
 *    callback.
 * @param {Element|string} ukElement DOM node, UIkit element, or CSS selector
 *    for the element to append event to.
 * @param {string} ukEventName UIkit event name to associate with element.
 * @param {string} propsEventName Event name from component props.
 * @param {Object} componentProps Props passed from the component (used to
 *    include in the callback).
 * @param {Object} [options = {}] Options to apply to the event invoker.
 * @property {boolean} [options.isOnce = false] Indicates if the UIkit event
 *    listener should only be called once.
 *
 * @example
 * >> In Accordion.js:
 * componentDidMount() {
 *   const domNode = document.querySelector('#accordion');
 *   addEventInvoker(domNode, 'onhidden', 'onHidden', this.props);
 * }
 *
 * >> Usage:
 * <Accordion
 *   ...
 *   collapsible={false}
 *   onHidden={(e, props) => console.log(props.collapsible)}
 *   ^^ This will print "false" when an Accordion item is hidden.
 *   ...
 * />
 */
export const addEventInvoker = (
  ukElement,
  ukEventName,
  propsEventName,
  componentProps,
  { isOnce = false } = {},
) => {
  if (isNil(ukElement)) return false;
  const elementRef = has(ukElement, '$el') ? ukElement.$el : ukElement;
  if (!get(componentProps, propsEventName)) return false;
  const invokedEvent = e =>
    invoke(componentProps, propsEventName, e, componentProps);
  const utilFn = isOnce ? UIkit.util.once : UIkit.util.on;
  utilFn(elementRef, ukEventName, invokedEvent);
  return true;
};

/**
 * Calls the addEventInvoker function on the specified element and adds event
 *    invokers for each item specified in the ukToPropsEventMap.
 * @param {Element|string} ukElement DOM node, UIkit element, or CSS selector
 *    for the element to append events to.
 * @param {Object} ukToPropsEventMap Object with the UIkit event name as the
 *    key and component props event name as the value.
 * @param {Object} componentProps Props passed from the component (used to
 *    include in the callback).
 *
 * @example
 * >> In Accordion.js:
 * componentDidMount() {
 *   const ukToPropsEventMap = {
 *     beforehide: 'onBeforeHide',
 *     beforeshow: 'onBeforeShow',
 *     hidden: 'onHidden',
 *     hide: 'onHide',
 *     show: 'onShow',
 *     shown: 'onShown',
 *   };
 *   addMultipleEventInvokers('#accordion', ukToPropsEventMap, this.props);
 * }
 */
export const addMultipleEventInvokers = (
  ukElement,
  ukToPropsEventMap,
  componentProps,
) => {
  toPairs(ukToPropsEventMap).forEach(([ukEventName, propsEventName]) => {
    addEventInvoker(ukElement, ukEventName, propsEventName, componentProps);
  });
};
