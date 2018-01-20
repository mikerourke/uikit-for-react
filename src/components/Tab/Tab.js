import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, noop } from 'lodash';
import {
  buildClassName,
  findChildByType,
  getOptionsString,
  joinListProp,
  UIK,
} from '../../lib';
import { BlockElement } from '../Base';
import TabItem from './TabItem';

export default class Tab extends BlockElement {
  static meta = {
    name: 'Tab',
    ukClass: 'uk-tab',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    activeIndex: PropTypes.number,
    align: PropTypes.oneOf(['bottom', 'left', 'right']),
    animation: PropTypes.shape({
      name: PropTypes.oneOfType([
        PropTypes.oneOf(UIK.ANIMATIONS),
        PropTypes.arrayOf(UIK.ANIMATIONS),
      ]),
      duration: PropTypes.number,
    }),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    defaultIndex: PropTypes.number,
    media: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(UIK.BREAKPOINTS),
    ]),
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    selectorConnect: PropTypes.string,
    selectorToggle: PropTypes.string,
    swiping: PropTypes.bool,
  };

  static defaultProps = {
    activeIndex: 0,
  };

  static Item = TabItem;

  componentDidMount() {
    UIkit.util.on(this.ref, 'beforehide', get(this.props, 'onBeforeHide', noop));
    UIkit.util.on(this.ref, 'beforeshow', get(this.props, 'onBeforeShow', noop));
    UIkit.util.on(this.ref, 'hidden', get(this.props, 'onHidden', noop));
    UIkit.util.on(this.ref, 'hide', get(this.props, 'onHide', noop));
    UIkit.util.on(this.ref, 'show', get(this.props, 'onShow', noop));
    UIkit.util.on(this.ref, 'shown', get(this.props, 'onShown', noop));
    UIkit.tab(this.ref).show(this.props.activeIndex);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeIndex !== this.props.activeIndex) {
      UIkit.tab(this.ref).show(nextProps.activeIndex);
    }
  }

  handleRef = element => (this.ref = element);

  validateActiveIndex = () => {
    const { children, activeIndex } = this.props;
    const tabItems = findChildByType(children, TabItem);
    if (activeIndex > tabItems.length) {
      throw new Error('Invalid activeIndex specified, must be less than Tab item quantity.');
    }
  };

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      activeIndex,
      align,
      animation,
      children,
      className,
      defaultIndex,
      media,
      onBeforeHide,
      onBeforeShow,
      onHidden,
      onHide,
      onShow,
      onShown,
      selectorConnect,
      selectorToggle,
      swiping,
      ...rest
    } = unhandledProps;

    this.validateActiveIndex();

    const classes = classnames(
      className,
      inheritedClasses,
      buildClassName(Tab.meta.ukClass, align),
    );

    const componentOptions = getOptionsString({
      active: defaultIndex,
      animation: joinListProp(animation),
      connect: selectorConnect,
      duration: get(animation, 'duration'),
      media,
      swiping,
      toggle: selectorToggle,
    });

    return (
      <ul
        {...rest}
        className={classes}
        ref={this.handleRef}
        style={inheritedStyle}
        data-uk-tab={componentOptions}
        {...inheritedAttributes}
      >
        {children}
      </ul>
    );
  }
}
