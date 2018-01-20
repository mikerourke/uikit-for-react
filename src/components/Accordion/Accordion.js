import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { flatten, get, isArray, isNil, max, noop } from 'lodash';
import {
  getOptionsString,
  HTML,
} from '../../lib';
import { BlockElement } from '../Base';
import AccordionContent from './AccordionContent';
import AccordionItem from './AccordionItem';
import AccordionTitle from './AccordionTitle';

/**
 * Create a list of items that can be shown individually by clicking an item's header.
 * @see https://getuikit.com/docs/accordion
 */
export default class Accordion extends BlockElement {
  static meta = {
    name: 'Accordion',
    ukClass: 'uk-accordion',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    animation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        active: PropTypes.bool,
        duration: PropTypes.number,
      }),
    ]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    collapsible: PropTypes.bool,
    defaultIndex: PropTypes.number,
    hideOpenAnimation: PropTypes.bool,
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
    selectorContent: PropTypes.string,
    selectorTargets: PropTypes.string,
    selectorToggle: PropTypes.string,
    transition: PropTypes.oneOf(HTML.CSS_EASING),
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

    const animate = (get(props, 'hideOpenAnimation', false) === false);
    const openIndices = flatten([props.openIndex]);
    const maxAllowed = (React.Children.count(props.children) - 1);
    if (max(openIndices) > maxAllowed) {
      throw new Error(`Invalid openIndex prop passed to Accordion, maximum allowed value is ${maxAllowed}.`);
    }

    React.Children.toArray(props.children).forEach((child, childIndex) => {
      const isOpen = /uk-open/g.test(child.props.className);
      const shouldBeOpen = openIndices.includes(childIndex);
      if ((isOpen && !shouldBeOpen) || (!isOpen && shouldBeOpen)) {
        UIkit.accordion(this.ref).toggle(childIndex, animate);
      }
    });
  };

  handleRef = element => (this.ref = element);

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      animation,
      children,
      className,
      collapsible,
      defaultIndex,
      hideOpenAnimation,
      multiple,
      onBeforeShow,
      onShow,
      onShown,
      onBeforeHide,
      onHide,
      onHidden,
      openIndex,
      selectorContent,
      selectorTargets,
      selectorToggle,
      transition,
      ...rest
    } = unhandledProps;

    if (isArray(openIndex) && multiple !== true) {
      throw new Error('You must set multiple = true when you pass an array of values to the openIndex prop.');
    }

    const classes = classnames(
      className,
      inheritedClasses,
      Accordion.meta.ukClass,
    );

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
      <ul
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        style={inheritedStyle}
        data-uk-accordion={componentOptions}
        {...inheritedAttributes}
      >
        {children}
      </ul>
    );
  }
}
