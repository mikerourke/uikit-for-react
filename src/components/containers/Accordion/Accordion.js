import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import flatten from 'lodash/flatten';
import isNil from 'lodash/isNil';
import isUndefined from 'lodash/isUndefined';
import noop from 'lodash/noop';
import {
  addMultipleEventInvokers,
  customPropTypes,
  getOptionsString,
  HTML,
  LibraryComponent,
} from '../../../lib';
import Base from '../../base';
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
    ...Base.propTypes,
    animation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        active: PropTypes.bool,
        duration: ExtraPropTypes.nonNegativeInteger,
      }),
    ]),
    as: customPropTypes.customOrStringElement('ul'),
    collapsible: PropTypes.bool,
    defaultIndex: customPropTypes.validateIndex,
    hideOpenAnimation: PropTypes.bool,
    multiple: PropTypes.bool,
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    openIndex: customPropTypes.validateIndexArray,
    selectorContent: PropTypes.string,
    selectorTargets: PropTypes.string,
    selectorToggle: PropTypes.string,
    transition: PropTypes.oneOf(HTML.CSS_EASING),
  };

  static defaultProps = {
    as: 'ul',
    hideOpenAnimation: false,
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
  };

  static Content = AccordionContent;
  static Panel = AccordionPanel;
  static Title = AccordionTitle;

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('accordion');
    this.accordion = null;
  }

  componentDidMount() {
    this.accordion = UIkit.accordion(this.libComp.cssSelector);
    const ukToPropsEventMap = {
      beforehide: 'onBeforeHide',
      beforeshow: 'onBeforeShow',
      hidden: 'onHidden',
      hide: 'onHide',
      show: 'onShow',
      shown: 'onShown',
    };
    addMultipleEventInvokers(this.accordion, ukToPropsEventMap, this.props);
    this.toggleOpenItems(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.toggleOpenItems(nextProps);
  }

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
    if (isUndefined(props.openIndex)) return;

    const animate = !props.hideOpenAnimation;
    const openIndices = flatten([props.openIndex]);
    const accordionContents = this.accordion.$el.querySelectorAll('div');

    const getIsOpen = childIndex => {
      const hiddenItem = accordionContents
        .item(childIndex)
        .attributes.getNamedItem('aria-hidden');
      if (isNil(hiddenItem)) return false;
      return JSON.parse(hiddenItem.value) === false;
    };

    React.Children.toArray(props.children).forEach((child, childIndex) => {
      const isOpen = getIsOpen(childIndex);
      const shouldBeOpen = openIndices.includes(childIndex);
      if ((isOpen && !shouldBeOpen) || (!isOpen && shouldBeOpen)) {
        this.accordion.toggle(childIndex, animate);
      }
    });
  };

  render() {
    const {
      animation,
      className,
      collapsible,
      defaultIndex,
      multiple,
      openIndex,
      selectorContent,
      selectorTargets,
      selectorToggle,
      transition,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-accordion');

    const componentOptions = getOptionsString({
      active: defaultIndex,
      animation,
      collapsible,
      content: selectorContent,
      multiple,
      targets: selectorTargets,
      toggle: selectorToggle,
      transition,
    });

    return (
      <Base
        {...rest}
        baseId={this.props.id}
        className={classes}
        component={Accordion}
        uk-accordion={componentOptions}
        {...this.libComp.appendProps(this.props)}
      />
    );
  }
}
