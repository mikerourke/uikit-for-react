// TODO: Add toggle and pause functionality.
import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
  getOptionsString,
  UIK,
} from '../../lib';
import { BlockElement } from '../Base';
import SlideshowItem from './SlideshowItem';

export default class Slideshow extends BlockElement {
  static displayName = 'Slideshow';

  static propTypes = {
    ...BlockElement.propTypes,
    activeIndex: PropTypes.number,
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.SLIDESHOW_ANIMATIONS),
      PropTypes.shape({
        name: PropTypes.oneOf(UIK.SLIDESHOW_ANIMATIONS),
        velocity: PropTypes.number,
      }),
    ]),
    as: BlockElement.asPropType,
    autoplay: PropTypes.bool,
    autoplayInterval: PropTypes.number,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    defaultIndex: PropTypes.number,
    finite: PropTypes.bool,
    maxHeight: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    minHeight: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    onBeforeItemHide: PropTypes.func,
    onBeforeItemShow: PropTypes.func,
    onItemHidden: PropTypes.func,
    onItemHide: PropTypes.func,
    onItemShow: PropTypes.func,
    onItemShown: PropTypes.func,
    paused: PropTypes.bool,
    pauseOnHover: PropTypes.bool,
    ratio: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    activeIndex: 0,
    animation: null,
    as: 'div',
    autoplay: false,
    autoplayInterval: 7000,
    className: null,
    finite: false,
    maxHeight: false,
    minHeight: false,
    onBeforeItemHide: noop,
    onBeforeItemShow: noop,
    onItemHidden: noop,
    onItemHide: noop,
    onItemShow: noop,
    onItemShown: noop,
    paused: false,
    pauseOnHover: false,
    ratio: '16:9',
  };

  static Item = SlideshowItem;

  componentDidMount() {
    UIkit.util.on(this.ref, 'beforeitemhide', this.props.onBeforeItemHide);
    UIkit.util.on(this.ref, 'beforeitemshow', this.props.onBeforeItemShow);
    UIkit.util.on(this.ref, 'itemhidden', this.props.onItemHidden);
    UIkit.util.on(this.ref, 'itemhide', this.props.onItemHide);
    UIkit.util.on(this.ref, 'itemshow', this.props.onItemShow);
    UIkit.util.on(this.ref, 'itemshown', this.props.onItemShown);
  }

  render() {
    const { animation, ...propsToParse } = this.props;
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(propsToParse);

    const {
      activeIndex,
      autoplay,
      autoplayInterval,
      children,
      className,
      finite,
      maxHeight,
      minHeight,
      onBeforeItemHide,
      onBeforeItemShow,
      onItemHidden,
      onItemHide,
      onItemShow,
      onItemShown,
      paused,
      pauseOnHover,
      ratio,
      ...rest
    } = unhandledProps;

    const classes = classnames(className, inheritedClasses);

    const componentOptions = getOptionsString({
      activeIndex,
      animation,
      autoplay,
      autoplayInterval,
      finite,
      maxHeight,
      minHeight,
      pauseOnHover,
      ratio,
    });

    const Element = getElementType(Slideshow, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        data-uk-slideshow={componentOptions}
        {...inheritedAttributes}
      >
        <ul className={buildClassName('slideshow', 'items')}>{children}</ul>
      </Element>
    );
  }
}
