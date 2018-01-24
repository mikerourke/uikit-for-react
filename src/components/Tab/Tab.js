import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil, noop } from 'lodash';
import {
  buildClassName,
  findChildByType,
  getOptionsString,
  UIK,
} from '../../lib';
import { BlockElement } from '../Base';
import TabItem from './TabItem';

export default class Tab extends React.Component {
  static displayName = 'Tab';

  static propTypes = {
    ...BlockElement.propTypes,
    activeIndex: PropTypes.number,
    align: PropTypes.oneOf(['bottom', 'left', 'right']),
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.arrayOf(UIK.ANIMATIONS),
      PropTypes.shape({
        in: PropTypes.oneOfType([
          PropTypes.oneOf(UIK.ANIMATIONS),
          PropTypes.arrayOf(UIK.ANIMATIONS),
        ]),
        out: PropTypes.oneOfType([
          PropTypes.oneOf(UIK.ANIMATIONS),
          PropTypes.arrayOf(UIK.ANIMATIONS),
        ]),
        duration: PropTypes.number,
      }),
    ]),
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
    align: null,
    animation: null,
    className: null,
    defaultIndex: 0,
    media: null,
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
    selectorConnect: null,
    selectorToggle: null,
    swiping: false,
  };

  static Item = TabItem;

  componentDidMount() {
    if (!this.ref) return;
    UIkit.util.on(this.ref, 'beforehide', this.props.onBeforeHide);
    UIkit.util.on(this.ref, 'beforeshow', this.props.onBeforeShow);
    UIkit.util.on(this.ref, 'hidden', this.props.onHidden);
    UIkit.util.on(this.ref, 'hide', this.props.onHide);
    UIkit.util.on(this.ref, 'show', this.props.onShow);
    UIkit.util.on(this.ref, 'shown', this.props.onShown);
    UIkit.tab(this.ref).show(this.props.activeIndex);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeIndex !== this.props.activeIndex) {
      UIkit.tab(this.ref).show(nextProps.activeIndex);
    }
  }

  handleRef = element => {
    if (!element) return;
    this.ref = isNil(element.ref) ? element : element.ref;
  };

  validateActiveIndex = () => {
    const { children, activeIndex } = this.props;
    const tabItems = findChildByType(children, TabItem);
    if (activeIndex > tabItems.length) {
      throw new Error(
        'Invalid activeIndex specified, must be less than Tab item quantity.',
      );
    }
  };

  render() {
    const {
      activeIndex,
      align,
      animation,
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
    } = this.props;

    this.validateActiveIndex();

    const classes = classnames(className, buildClassName('tab', align));

    const componentOptions = getOptionsString({
      animation,
      active: defaultIndex,
      connect: selectorConnect,
      media,
      swiping,
      toggle: selectorToggle,
    });

    return (
      <BlockElement
        {...rest}
        as="ul"
        className={classes || undefined}
        ref={this.handleRef}
        data-uk-tab={componentOptions}
      />
    );
  }
}
