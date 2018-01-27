// TODO: Find out how to implement Panel.
import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil, noop } from 'lodash';
import { buildClassName, restrictToChildTypes } from '../../../lib';
import { BlockElement } from '../../base';
import LightboxItem from './LightboxItem';

export default class Lightbox extends React.Component {
  static displayName = 'Lightbox';

  static propTypes = {
    ...BlockElement.propTypes,
    activeIndex: PropTypes.number,
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(['fade', 'scale', 'slide']),
      PropTypes.shape({
        name: PropTypes.oneOf(['fade', 'scale', 'slide']),
        velocity: PropTypes.number,
      }),
    ]),
    autoplay: PropTypes.shape({
      delay: PropTypes.number,
      interval: PropTypes.number,
    }),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    defaultIndex: PropTypes.number,
    delayControls: PropTypes.number,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        source: PropTypes.string,
        caption: PropTypes.string,
      }),
    ),
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
    panelIndex: PropTypes.number,
    panelShown: PropTypes.number,
    paused: PropTypes.bool,
    pauseOnHover: PropTypes.bool,
    preload: PropTypes.number,
    selectorToggle: PropTypes.string,
    shown: PropTypes.bool,
    template: PropTypes.string,
    videoAutoplay: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    activeIndex: null,
    animation: null,
    autoplay: null,
    className: null,
    defaultIndex: 0,
    delayControls: null,
    items: null,
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
    panelIndex: 0,
    panelShown: null,
    paused: false,
    pauseOnHover: false,
    preload: null,
    selectorToggle: null,
    shown: false,
    template: null,
    videoAutoplay: false,
  };

  static Item = LightboxItem;

  componentDidMount() {
    if (!this.ref) return;
    UIkit.util.on(this.ref, 'beforehide', this.props.onBeforeHide);
    UIkit.util.on(this.ref, 'beforeitemhide', this.props.onBeforeItemHide);
    UIkit.util.on(this.ref, 'beforeitemshow', this.props.onBeforeItemShow);
    UIkit.util.on(this.ref, 'beforeshow', this.props.onBeforeShow);
    UIkit.util.on(this.ref, 'hidden', this.props.onHidden);
    UIkit.util.on(this.ref, 'hide', this.props.onHide);
    UIkit.util.on(this.ref, 'itemhidden', this.props.onItemHidden);
    UIkit.util.on(this.ref, 'itemhide', this.props.onItemHide);
    UIkit.util.on(this.ref, 'itemload', this.props.onItemLoad);
    UIkit.util.on(this.ref, 'itemshow', this.props.onItemShow);
    UIkit.util.on(this.ref, 'itemshown', this.props.onItemShown);
    UIkit.util.on(this.ref, 'show', this.props.onShow);
    UIkit.util.on(this.ref, 'shown', this.props.onShown);
  }

  handleRef = element => {
    if (!element) return;
    this.ref = isNil(element.ref) ? element : element.ref;
  };

  render() {
    const {
      activeIndex,
      animation,
      autoplay,
      className,
      defaultIndex,
      delayControls,
      items,
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
      panelIndex,
      panelShown,
      paused,
      pauseOnHover,
      preload,
      selectorToggle,
      shown,
      template,
      videoAutoplay,
      ...rest
    } = this.props;

    const classes = classnames(className, {});

    return (
      <BlockElement
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        data-lightbox
      />
    );
  }
}
