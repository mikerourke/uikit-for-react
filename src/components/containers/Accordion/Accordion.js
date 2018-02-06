import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { flatten, isNil, noop } from 'lodash';
import {
  customPropTypes,
  generateSelector,
  getBaseRef,
  getElementType,
  getOptionsString,
  HTML,
} from '../../../lib';
import { Flex, Margin, Width } from '../../common';
import AccordionContent from './AccordionContent';
import AccordionPanel from './AccordionPanel';
import AccordionTitle from './AccordionTitle';

/**
 * Create a list of items that can be shown individually by clicking an item's
 * header.
 * @see https://getuikit.com/docs/accordion
 */
export default class Accordion extends React.Component {
  static displayName = 'Accordion';

  static propTypes = {
    animation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        active: PropTypes.bool,
        duration: ExtraPropTypes.nonNegativeInteger,
      }),
    ]),
    as: customPropTypes.customOrStringElement('ul'),
    children: PropTypes.node,
    className: PropTypes.string,
    collapsible: PropTypes.bool,
    defaultIndex: customPropTypes.validateIndex,
    flex: Flex.propTypes,
    hideOpenAnimation: PropTypes.bool,
    margin: Margin.propTypes,
    multiple: PropTypes.bool,
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    openIndex: customPropTypes.validateIndexArray,
    transition: PropTypes.oneOf(HTML.CSS_EASING),
    width: Width.propTypes,
  };

  static defaultProps = {
    animation: {
      active: true,
      duration: 200,
    },
    as: 'ul',
    className: '',
    collapsible: true,
    hideOpenAnimation: false,
    multiple: false,
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
    transition: 'ease',
  };

  static Content = AccordionContent;
  static Panel = AccordionPanel;
  static Title = AccordionTitle;

  constructor() {
    super();
    this.selector = generateSelector();
  }

  componentDidMount() {
    const ref = this.getRef();
    UIkit.util.on(ref, 'beforehide', this.props.onBeforeHide);
    UIkit.util.on(ref, 'beforeshow', this.props.onBeforeShow);
    UIkit.util.on(ref, 'show', this.props.onShow);
    UIkit.util.on(ref, 'shown', this.props.onShown);
    UIkit.util.on(ref, 'hidden', this.props.onHidden);
    UIkit.util.on(ref, 'hide', this.props.onHide);
    this.toggleOpenItems(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.toggleOpenItems(nextProps);
  }

  getRef = () => (isNil(this.ref) ? `.${this.selector}` : this.ref);

  /**
   * Loops through each of the accordion items and either toggles them as open
   *    if they're not currently open and should be, or toggles them as closed
   *    if they should be closed (based on openIndex prop).
   * @param {Object} props Props to evaluate to determine which items need to
   *    be toggled.
   */
  toggleOpenItems = props => {
    // Don't open or close any items if the user didn't specify an openIndex
    // prop.
    if (isNil(props.openIndex)) return;

    const animate = !props.hideOpenAnimation;
    const openIndices = flatten([props.openIndex]);
    const accordion = UIkit.accordion(this.getRef());
    React.Children.toArray(props.children).forEach((child, childIndex) => {
      const isOpen = /uk-open/g.test(child.props.className);
      const shouldBeOpen = openIndices.includes(childIndex);
      if ((isOpen && !shouldBeOpen) || (!isOpen && shouldBeOpen)) {
        accordion.toggle(childIndex, animate);
      }
    });
  };

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  render() {
    const {
      animation,
      as,
      className,
      collapsible,
      defaultIndex,
      flex,
      hideOpenAnimation,
      margin,
      multiple,
      onBeforeShow,
      onShow,
      onShown,
      onBeforeHide,
      onHide,
      onHidden,
      openIndex,
      transition,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      this.selector,
      'uk-accordion',
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const componentOptions = getOptionsString({
      active: defaultIndex,
      animation,
      collapsible,
      multiple,
      transition,
    });

    const Element = getElementType(Accordion, as);
    return (
      <Element
        {...rest}
        className={classes}
        ref={this.handleRef}
        data-uk-accordion={componentOptions}
      />
    );
  }
}
