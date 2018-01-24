import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { flatten, isArray, isNil, max, noop } from 'lodash';
import { getOptionsString, HTML } from '../../lib';
import { BlockElement } from '../Base';
import AccordionContent from './AccordionContent';
import AccordionItem from './AccordionItem';
import AccordionTitle from './AccordionTitle';

/**
 * Create a list of items that can be shown individually by clicking an item's header.
 * @see https://getuikit.com/docs/accordion
 */
export default class Accordion extends React.Component {
  static displayName = 'Accordion';

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
    openIndex: CustomPropTypes.and([
      PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number),
      ]),
      props => {
        if (isArray(props.openIndex) && !props.multiple) {
          return new Error(
            'You must set multiple = true when you pass an array of values to the openIndex prop.',
          );
        }
        return null;
      },
    ]),
    selectorContent: PropTypes.string,
    selectorTargets: PropTypes.string,
    selectorToggle: PropTypes.string,
    transition: PropTypes.oneOf(HTML.CSS_EASING),
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    animation: null,
    className: null,
    collapsible: false,
    defaultIndex: 0,
    hideOpenAnimation: false,
    multiple: false,
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
    openIndex: null,
    selectorContent: null,
    selectorTargets: null,
    selectorToggle: null,
    transition: null,
  };

  static Content = AccordionContent;
  static Item = AccordionItem;
  static Title = AccordionTitle;

  componentDidMount() {
    if (!this.ref) return;
    UIkit.util.on(this.ref, 'beforehide', this.props.onBeforeHide);
    UIkit.util.on(this.ref, 'beforeshow', this.props.onBeforeShow);
    UIkit.util.on(this.ref, 'show', this.props.onShow);
    UIkit.util.on(this.ref, 'shown', this.props.onShown);
    UIkit.util.on(this.ref, 'hidden', this.props.onHidden);
    UIkit.util.on(this.ref, 'hide', this.props.onHide);
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
  toggleOpenItems = props => {
    // Don't open or close any items if the user didn't specify an openIndex prop.
    if (isNil(props.openIndex)) return;

    const animate = !props.hideOpenAnimation;
    const openIndices = flatten([props.openIndex]);
    const maxAllowed = React.Children.count(props.children) - 1;
    if (max(openIndices) > maxAllowed) {
      throw new Error(
        `Invalid openIndex prop passed to Accordion, maximum allowed value is ${maxAllowed}.`,
      );
    }

    React.Children.toArray(props.children).forEach((child, childIndex) => {
      const isOpen = /uk-open/g.test(child.props.className);
      const shouldBeOpen = openIndices.includes(childIndex);
      if ((isOpen && !shouldBeOpen) || (!isOpen && shouldBeOpen)) {
        UIkit.accordion(this.ref).toggle(childIndex, animate);
      }
    });
  };

  handleRef = element => {
    if (!element) return;
    this.ref = isNil(element.ref) ? element : element.ref;
  };

  render() {
    const {
      animation,
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
      <BlockElement
        {...rest}
        as="ul"
        className={classes || undefined}
        ref={this.handleRef}
        data-uk-accordion={componentOptions}
      />
    );
  }
}
