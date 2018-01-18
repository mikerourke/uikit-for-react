import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import UIkit from 'uikit';
import { get, noop } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  findChildByType,
  getOptionsString,
  joinListProp,
  UIK,
} from '../../lib';
import TabItem from './TabItem';

class Tab extends React.Component {
  static meta = {
    name: 'Tab',
    ukClass: 'uk-tab',
  };

  static propTypes = {
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
    childWidth: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.CHILD_WIDTHS),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.CHILD_WIDTHS)),
    ]),
    className: PropTypes.string,
    defaultIndex: PropTypes.number,
    justifyContent: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS)),
    ]),
    margin: commonPropTypes.margin,
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
    padding: commonPropTypes.padding,
    selectorConnect: PropTypes.string,
    selectorToggle: PropTypes.string,
    swiping: PropTypes.bool,
  };

  static defaultProps = {
    activeIndex: 0,
  };

  static Item = TabItem;

  componentDidMount() {
    UIkit.util.on(this.ref, 'beforeshow', get(this.props, 'onBeforeShow', noop));
    UIkit.util.on(this.ref, 'show', get(this.props, 'onShow', noop));
    UIkit.util.on(this.ref, 'shown', get(this.props, 'onShown', noop));
    UIkit.util.on(this.ref, 'beforehide', get(this.props, 'onBeforeHide', noop));
    UIkit.util.on(this.ref, 'hide', get(this.props, 'onHide', noop));
    UIkit.util.on(this.ref, 'hidden', get(this.props, 'onHidden', noop));
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
      activeIndex,
      align,
      animation,
      children,
      childWidth,
      className,
      defaultIndex,
      justifyContent,
      margin,
      media,
      onBeforeHide,
      onBeforeShow,
      onHidden,
      onHide,
      onShow,
      onShown,
      padding,
      selectorConnect,
      selectorToggle,
      swiping,
      ...rest
    } = this.props;

    this.validateActiveIndex();

    const classes = classnames(
      className,
      buildObjectOrValueClassNames('child', 'width', childWidth),
      buildObjectOrValueClassNames('flex', justifyContent),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
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
        data-uk-tab={componentOptions}
      >
        {children}
      </ul>
    );
  }
}

export default Tab;
