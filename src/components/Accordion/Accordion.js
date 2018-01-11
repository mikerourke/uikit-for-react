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
    animation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        transition: PropTypes.oneOf(HTML.CSS_EASING),
        duration: PropTypes.number,
      }),
    ]),
    as: PropTypes.oneOf(['ul', 'ol']),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    collapsible: PropTypes.bool,
    defaultIndex: PropTypes.number,
    margin: commonPropTypes.margin,
    multiple: PropTypes.bool,
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    openIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.number),
    ]),
    padding: commonPropTypes.padding,
    selectorContent: PropTypes.string,
    selectorTargets: PropTypes.string,
    selectorToggle: PropTypes.string,
  };

  static defaultProps = {
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
  };

  handleRef = element => (this.ref = element);

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
      selectorContent,
      selectorTargets,
      selectorToggle,
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
      content: selectorContent,
      duration: get(animation, 'duration'),
      multiple,
      targets: selectorTargets,
      toggle: selectorToggle,
      transition: get(animation, 'transition'),
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
