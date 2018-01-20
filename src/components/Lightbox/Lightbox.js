// TODO: Find out how to implement Panel.
import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, noop } from 'lodash';
import {
  buildClassName,
  restrictToChildTypes,
} from '../../lib';
import { BlockElement } from '../Base';
import LightboxItem from './LightboxItem';

export default class Lightbox extends BlockElement {
  static meta = {
    name: 'Lightbox',
  };

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
    children: restrictToChildTypes(),
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
    defaultIndex: 0,
    panelIndex: 0,
    paused: false,
    shown: false,
  };

  static Item = LightboxItem;

  componentDidMount() {
    UIkit.util.on(this.ref, 'beforehide', get(this.props, 'onBeforeHide', noop));
    UIkit.util.on(this.ref, 'beforeitemhide', get(this.props, 'onBeforeItemHide', noop));
    UIkit.util.on(this.ref, 'beforeitemshow', get(this.props, 'onBeforeItemShow', noop));
    UIkit.util.on(this.ref, 'beforeshow', get(this.props, 'onBeforeShow', noop));
    UIkit.util.on(this.ref, 'hidden', get(this.props, 'onHidden', noop));
    UIkit.util.on(this.ref, 'hide', get(this.props, 'onHide', noop));
    UIkit.util.on(this.ref, 'itemhidden', get(this.props, 'onItemHidden', noop));
    UIkit.util.on(this.ref, 'itemhide', get(this.props, 'onItemHide', noop));
    UIkit.util.on(this.ref, 'itemload', get(this.props, 'onItemLoad', noop));
    UIkit.util.on(this.ref, 'itemshow', get(this.props, 'onItemShow', noop));
    UIkit.util.on(this.ref, 'itemshown', get(this.props, 'onItemShown', noop));
    UIkit.util.on(this.ref, 'show', get(this.props, 'onShow', noop));
    UIkit.util.on(this.ref, 'shown', get(this.props, 'onShown', noop));
  }

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      children,
      className,
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
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      {
        [buildClassName('subnav', 'divider')]: (divider),
        [buildClassName('subnav', 'pill')]: (pill),
      },
    );

    return (
      <div
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        data-lightbox
        {...inheritedAttributes}
      >
        {children}
      </div>
    );
  }
}
