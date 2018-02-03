import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { isNil, noop } from 'lodash';
import {
  buildClassName,
  generateSelector,
  getOptionsString,
  UIK,
} from '../../../lib';
import { BlockElement } from '../../base';
import TabItem from './TabItem';

export default class Tab extends React.Component {
  static displayName = 'Tab';

  static propTypes = {
    ...BlockElement.propTypes,
    activeIndex: ExtraPropTypes.and([
      ExtraPropTypes.nonNegativeInteger,
      props => {
        const maxAllowed = React.Children.count(props.children) - 1;
        if (props.activeIndex > maxAllowed) {
          return new Error(
            `Invalid activeIndex passed to Lightbox, the maximum value allowed is ${maxAllowed}`,
          );
        }
        return null;
      },
    ]),
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
    swiping: PropTypes.bool,
  };

  static defaultProps = {
    activeIndex: 0,
    className: '',
    defaultIndex: 0,
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
    swiping: false,
  };

  static Item = TabItem;

  constructor() {
    super();
    this.selector = null;
  }

  componentDidMount() {
    const ref = this.getRef();
    UIkit.util.on(ref, 'beforehide', this.props.onBeforeHide);
    UIkit.util.on(ref, 'beforeshow', this.props.onBeforeShow);
    UIkit.util.on(ref, 'hidden', this.props.onHidden);
    UIkit.util.on(ref, 'hide', this.props.onHide);
    UIkit.util.on(ref, 'show', this.props.onShow);
    UIkit.util.on(ref, 'shown', this.props.onShown);
    UIkit.tab(ref).show(this.props.activeIndex);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeIndex !== this.props.activeIndex) {
      UIkit.tab(this.getRef()).show(nextProps.activeIndex);
    }
  }

  getRef = () => (isNil(this.ref) ? this.selector : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = isNil(element.ref) ? element : element.ref;
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
      swiping,
      ...rest
    } = this.props;

    this.selector = generateSelector();
    const classes = classnames(
      className,
      this.selector,
      buildClassName('tab', align),
    );

    const componentOptions = getOptionsString({
      animation,
      active: defaultIndex,
      media,
      swiping,
    });

    return (
      <BlockElement
        {...rest}
        as="ul"
        className={classes}
        ref={this.handleRef}
        data-uk-tab={componentOptions}
      />
    );
  }
}
