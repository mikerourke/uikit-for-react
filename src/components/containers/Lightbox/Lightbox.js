import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, isNil, isPlainObject, noop } from 'lodash';
import {
  customPropTypes,
  generateSelector,
  getBaseRef,
  getElementType,
  getOptionsString,
  HTML,
  UIK,
} from '../../../lib';
import LightboxItem from './LightboxItem';
import LightboxPanel from './LightboxPanel';

export default class Lightbox extends React.Component {
  static displayName = 'Lightbox';

  static propTypes = {
    activeIndex: customPropTypes.validateIndex,
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.LIGHTBOX_ANIMATIONS),
      PropTypes.shape({
        name: PropTypes.oneOf(UIK.LIGHTBOX_ANIMATIONS),
        velocity: PropTypes.number,
      }),
    ]),
    autoplay: PropTypes.shape({
      delay: PropTypes.number,
      interval: PropTypes.number,
    }),
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    defaultIndex: customPropTypes.validateIndex,
    onBeforeHide: PropTypes.func,
    onBeforeItemHide: PropTypes.func,
    onBeforeItemShow: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onItemHidden: PropTypes.func,
    onItemHide: PropTypes.func,
    onItemLoad: PropTypes.func,
    onItemShow: PropTypes.func,
    onItemShown: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    pauseOnHover: PropTypes.bool,
    shown: PropTypes.bool,
    videoAutoplay: PropTypes.bool,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    defaultIndex: 0,
    onBeforeHide: noop,
    onBeforeItemHide: noop,
    onBeforeItemShow: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onItemHidden: noop,
    onItemHide: noop,
    onItemLoad: noop,
    onItemShow: noop,
    onItemShown: noop,
    onShow: noop,
    onShown: noop,
    pauseOnHover: false,
    shown: false,
    videoAutoplay: false,
  };

  static Item = LightboxItem;
  static Panel = LightboxPanel;

  constructor() {
    super();
    this.selector = generateSelector();
  }

  componentWillReceiveProps(nextProps) {
    // TODO: Validate that these events work.
    const lightbox = UIkit.lightbox(this.getRef());
    if (nextProps.activeIndex !== this.props.activeIndex) {
      lightbox.show(nextProps.activeIndex);
    }
    if (nextProps.shown === true && this.props.shown === false) {
      lightbox.show(nextProps.activeIndex || 0);
    }
    if (nextProps.shown === false && this.props.shown === true) {
      lightbox.hide();
    }

    // Add event listeners to the Lightbox Panel after it appears.
    const panel = document.querySelector('.uk-lightbox');
    if (!panel) return;
    LightboxPanel.addEventListeners(this.props, panel);
  }

  getRef = () => (isNil(this.ref) ? `.${this.selector}` : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  render() {
    const {
      activeIndex,
      animation,
      as,
      autoplay,
      className,
      defaultIndex,
      onBeforeHide,
      onBeforeItemHide,
      onBeforeItemShow,
      onBeforeShow,
      onHidden,
      onHide,
      onItemHidden,
      onItemHide,
      onItemLoad,
      onItemShow,
      onItemShown,
      onShow,
      onShown,
      pauseOnHover,
      shown,
      videoAutoplay,
      ...rest
    } = this.props;

    const classes = classnames(className, this.selector);

    const animationName = isPlainObject(animation)
      ? get(animation, 'name', 'slide')
      : animation;

    const componentOptions = getOptionsString({
      animation: animationName,
      autoplay: get(autoplay, 'delay', 0),
      autoplayInterval: get(autoplay, 'interval', 0),
      index: defaultIndex,
      pauseOnHover,
      velocity: get(animation, 'velocity', 2),
      videoAutoplay,
    });

    const Element = getElementType(Lightbox, this.props);
    return (
      <Element
        {...rest}
        className={classes}
        ref={this.handleRef}
        data-uk-lightbox={componentOptions.replace('uk-animation-', '')}
      />
    );
  }
}
