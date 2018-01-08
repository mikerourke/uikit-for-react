import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { flatten, isArray, isNil, get, noop, range } from 'lodash';
import UIkit from 'uikit';
import {
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  getOptionsString,
  HTML,
} from '../../lib';
import AccordionContent from './AccordionContent';
import AccordionItem from './AccordionItem';
import AccordionTitle from './AccordionTitle';

class Accordion extends React.Component {
  static meta = {
    name: 'Accordion',
    ukClass: 'uk-accordion',
  };

  static propTypes = {
    /**
     * Animation options when displaying the accordion items.
     * @property {string} [transition="ease"] The transition to use when revealing items. Use
     *    keyword for easing functions.
     * @property {number} [duration=200] Animation duration in milliseconds.
     */
    animation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        transition: PropTypes.oneOf(HTML.CSS_EASING),
        duration: PropTypes.number,
      }),
    ]),

    /** HTML element to use for the component. */
    as: PropTypes.oneOf(['ul', 'ol']),

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Allow all items to be closed. If set to false, one item will always remain open */
    collapsible: PropTypes.bool,

    /** Index of the element to open initially. */
    defaultIndex: PropTypes.number,

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /**
     * Display multiple content sections at the same time without one collapsing when the other
     *    one is opened.
     */
    multiple: PropTypes.bool,

    /** Fires before an item is shown. Can prevent showing by returning false. */
    onBeforeShow: PropTypes.func,

    /** Fires after an item is shown. */
    onShow: PropTypes.func,

    /** Fires after the item's show animation has completed. */
    onShown: PropTypes.func,

    /** Fires before an item is hidden. Can prevent showing by returning false. */
    onBeforeHide: PropTypes.func,

    /** Fires after an item's hide animation has started. */
    onHide: PropTypes.func,

    /** Fires after an item is hidden. */
    onHidden: PropTypes.func,

    /**
     * Index/indices of the accordion items to show as open.
     */
    openIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.number),
    ]),

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,

    /**
     * CSS selectors to use for accordion elements.
     * @property {string} forContent The content selector, which selects the accordion content
     *    elements.
     * @property {string} forTargets The selector of the element(s) to toggle.
     * @property {string} forToggle The toggle selector, which toggles accordion items.
     */
    selectors: PropTypes.shape({
      forContent: PropTypes.string,
      forTargets: PropTypes.string,
      forToggle: PropTypes.string,
    }),
  };

  static defaultProps = {
    animation: {
      transition: 'ease',
      duration: 200,
    },
    as: 'ul',
    className: '',
    collapsible: true,
    defaultIndex: false,
    multiple: false,
    openIndex: null,
  };

  static Content = AccordionContent;
  static Item = AccordionItem;
  static Title = AccordionTitle;

  componentDidMount() {
    UIkit.util.on(this.ref, 'beforeshow', get(this.props, 'onBeforeShow', noop));
    UIkit.util.on(this.ref, 'show', get(this.props, 'onShow', noop));
    UIkit.util.on(this.ref, 'shown', get(this.props, 'onShown', noop));
    UIkit.util.on(this.ref, 'beforehide', get(this.props, 'onBeforeHide', noop));
    UIkit.util.on(this.ref, 'hide', get(this.props, 'onHide', noop));
    UIkit.util.on(this.ref, 'hidden', get(this.props, 'onHidden', noop));
    this.toggleOpenItems(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.toggleOpenItems(nextProps);
  }

  /**
   * Loops through each of the accordion items and either toggles them as open if they're not
   *    currently open and should be, or toggles them as closed if they should be closed (based on
   *    openIndex prop).
   * @param {Object} props Props to evaluate to determine which items need to be toggled.
   */
  toggleOpenItems = (props) => {
    // Don't open or close any items if the user didn't specify an openIndex prop.
    if (isNil(props.openIndex)) return;

    const animate = (this.props.animation !== false);
    const openIndices = flatten([props.openIndex]);
    const { childNodes = [] } = this.ref;

    // Loop through all child nodes.
    range(0, childNodes.length).forEach((itemIndex) => {
      const itemClasses = get(childNodes[itemIndex], 'classList', []);
      const isOpen = [...itemClasses].includes('uk-open');
      const shouldBeOpen = openIndices.includes(itemIndex);
      if ((isOpen && !shouldBeOpen) || (!isOpen && shouldBeOpen)) {
        UIkit.accordion(this.ref).toggle(itemIndex, animate);
      }
    });
  }

  handleRef = element => (this.ref = element)

  render() {
    const {
      animation,
      as,
      children,
      className,
      collapsible,
      defaultIndex,
      margin,
      multiple,
      onBeforeShow,
      onShow,
      onShown,
      onBeforeHide,
      onHide,
      onHidden,
      openIndex,
      padding,
      selectors,
      ...rest
    } = this.props;

    if (isArray(openIndex) && multiple !== true) {
      throw new Error('You must set multiple=true when you pass an array of values to the openIndex prop.');
    }

    const classes = classnames(
      className,
      Accordion.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    const componentOptions = getOptionsString({
      active: defaultIndex,
      animation: (animation !== false),
      collapsible,
      content: get(selectors, 'forContent', '> .uk-accordion-content'),
      duration: get(animation, 'duration', 200),
      multiple,
      targets: get(selectors, 'forTargets', '> *'),
      toggle: get(selectors, 'forToggle', '> .uk-accordion-title'),
      transition: get(animation, 'transition', 'ease'),
    });

    const Element = getElementType(Accordion, as, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        data-uk-accordion={componentOptions}
      >
        {children}
      </Element>
    );
  }
}

export default Accordion;
