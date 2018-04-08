import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import isPlainObject from 'lodash/isPlainObject';
import noop from 'lodash/noop';
import {
  customPropTypes,
  getOptionsString,
  HTML,
  LibraryComponent,
  UIK,
} from '../../lib';
import Base from '../Base';
import LightboxItem from './LightboxItem';
import LightboxPanel from './LightboxPanel';

export default class Lightbox extends React.Component {
  static displayName = 'Lightbox';

  static propTypes = {
    ...Base.propTypes,
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
    toggleSelector: PropTypes.string,
    videoAutoplay: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
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
    shown: false,
  };

  static Item = LightboxItem;
  static Panel = LightboxPanel;

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('lightbox');
    this.lightbox = null;
  }

  componentWillReceiveProps(nextProps) {
    const lightbox = UIkit.lightbox(this.libComp.cssSelector);
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

  render() {
    const {
      animation,
      autoplay,
      defaultIndex,
      pauseOnHover,
      toggleSelector,
      videoAutoplay,
      ...rest
    } = this.props;

    const animationName = isPlainObject(animation)
      ? get(animation, 'name', 'slide')
      : animation;

    const componentOptions = getOptionsString({
      animation: animationName,
      autoplay: get(autoplay, 'delay'),
      autoplayInterval: get(autoplay, 'interval'),
      index: defaultIndex,
      pauseOnHover,
      toggle: toggleSelector,
      velocity: get(animation, 'velocity'),
      videoAutoplay,
    }).replace('uk-animation-', '');

    return (
      <Base
        {...rest}
        component={Lightbox}
        uk-lightbox={componentOptions}
        {...this.libComp.appendProps(this.props)}
      />
    );
  }
}
