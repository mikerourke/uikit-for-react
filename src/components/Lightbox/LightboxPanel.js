import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import isPlainObject from 'lodash/isPlainObject';
import noop from 'lodash/noop';
import { addMultipleEventInvokers, customPropTypes, UIK } from '../../lib';
import LightboxItem from './LightboxItem';

export default class LightboxPanel extends React.Component {
  static displayName = 'LightboxPanel';

  static propTypes = {
    activeIndex: customPropTypes.validateIndex,
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.LIGHTBOX_ANIMATIONS),
      PropTypes.shape({
        name: PropTypes.oneOf(UIK.LIGHTBOX_ANIMATIONS),
        velocity: PropTypes.number,
      }),
    ]),
    autoplay: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        enabled: PropTypes.bool,
        interval: PropTypes.number,
      }),
    ]),
    children: customPropTypes.restrictToChildTypes(LightboxItem),
    defaultIndex: PropTypes.number,
    delayControls: PropTypes.number,
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
    paused: PropTypes.bool,
    pauseOnHover: PropTypes.bool,
    preload: PropTypes.number,
    shown: PropTypes.bool,
    template: PropTypes.string,
    videoAutoplay: PropTypes.bool,
  };

  static defaultProps = {
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
    paused: false,
    shown: false,
  };

  static addEventListeners(props, panelElement) {
    const ukToPropsEventMap = {
      beforehide: 'onBeforeHide',
      beforeitemhide: 'onBeforeItemHide',
      beforeitemshow: 'onBeforeItemShow',
      beforeshow: 'onBeforeShow',
      hidden: 'onHidden',
      hide: 'onHide',
      itemhidden: 'onItemHidden',
      itemhide: 'onItemHide',
      itemload: 'onItemLoad',
      itemshow: 'onItemShow',
      itemshown: 'onItemShown',
      show: 'onShow',
      shown: 'onShown',
    };
    addMultipleEventInvokers(panelElement, ukToPropsEventMap, props);
  }

  constructor(props) {
    super(props);
    this.lightboxPanel = null;
  }

  componentDidMount() {
    this.lightboxPanel.show(this.props.defaultIndex);
    const panelElement = this.lightboxPanel.$el;
    if (!panelElement) return;
    LightboxPanel.addEventListeners(this.props, panelElement);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeIndex !== this.props.activeIndex) {
      this.lightboxPanel.show(nextProps.activeIndex);
    }
    if (nextProps.shown === true && this.props.shown === false) {
      this.lightboxPanel.show(nextProps.activeIndex || 0);
    }
    if (nextProps.shown === false && this.props.shown === true) {
      this.lightboxPanel.hide();
    }
    if (nextProps.paused === true && this.props.paused === false) {
      this.lightboxPanel.stopAutoplay();
    }
    if (nextProps.paused === false && this.props.paused === true) {
      this.lightboxPanel.stopAutoplay();
    }
  }

  render() {
    const {
      animation,
      autoplay,
      children,
      defaultIndex,
      delayControls,
      pauseOnHover,
      preload,
      template,
      videoAutoplay,
    } = this.props;

    const items = React.Children.map(children, child => ({
      source: child.props.source,
      caption: child.props.caption,
    }));

    this.lightboxPanel = UIkit.lightboxPanel({
      animation,
      autoplay: isPlainObject(autoplay) ? get(autoplay, 'enabled') : autoplay,
      autoplayInterval: get(autoplay, 'interval'),
      delayControls,
      index: defaultIndex,
      items,
      pauseOnHover,
      preload,
      template,
      videoAutoplay,
    });

    return null;
  }
}
