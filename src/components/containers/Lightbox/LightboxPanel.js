import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import { get, isPlainObject, noop } from 'lodash';
import { customPropTypes, UIK } from '../../../lib';
import { BlockElement } from '../../base';
import LightboxItem from './LightboxItem';

export default class LightboxPanel extends React.Component {
  static displayName = 'LightboxPanel';

  static propTypes = {
    ...BlockElement.propTypes,
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
    ...BlockElement.defaultProps,
    defaultIndex: 0,
    delayControls: 3000,
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
    pauseOnHover: false,
    preload: 1,
    shown: false,
    videoAutoplay: false,
  };

  static addEventListeners(props, panelElement) {
    UIkit.util.on(panelElement, 'beforehide', props.onBeforeHide);
    UIkit.util.on(panelElement, 'beforeitemhide', props.onBeforeItemHide);
    UIkit.util.on(panelElement, 'beforeitemshow', props.onBeforeItemShow);
    UIkit.util.on(panelElement, 'beforeshow', props.onBeforeShow);
    UIkit.util.on(panelElement, 'hidden', props.onHidden);
    UIkit.util.on(panelElement, 'hide', props.onHide);
    UIkit.util.on(panelElement, 'itemhidden', props.onItemHidden);
    UIkit.util.on(panelElement, 'itemhide', props.onItemHide);
    UIkit.util.on(panelElement, 'itemload', props.onItemLoad);
    UIkit.util.on(panelElement, 'itemshow', props.onItemShow);
    UIkit.util.on(panelElement, 'itemshown', props.onItemShown);
    UIkit.util.on(panelElement, 'show', props.onShow);
    UIkit.util.on(panelElement, 'shown', props.onShown);
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
      autoplay: isPlainObject(autoplay)
        ? get(autoplay, 'enabled', false)
        : autoplay,
      autoplayInterval: get(autoplay, 'interval', 7000),
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
