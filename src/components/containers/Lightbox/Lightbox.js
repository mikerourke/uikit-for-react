import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import { get, isNil, isPlainObject, noop } from 'lodash';
import { getOptionsString, UIK } from '../../../lib';
import { BlockElement } from '../../base';
import LightboxItem from './LightboxItem';
import LightboxPanel from './LightboxPanel';

export default class Lightbox extends React.Component {
  static displayName = 'Lightbox';

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
    as: BlockElement.asPropType,
    children: PropTypes.node,
    className: PropTypes.string,
    defaultIndex: PropTypes.number,
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
    selectorToggle: PropTypes.string,
    shown: PropTypes.bool,
    videoAutoplay: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
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
    selectorToggle: 'a',
    shown: false,
    videoAutoplay: false,
  };

  static Item = LightboxItem;
  static Panel = LightboxPanel;

  componentWillReceiveProps(nextProps) {
    if (!this.ref) return;

    // TODO: Validate that these events work.
    const lightboxElement = UIkit.lightbox(this.ref);
    if (nextProps.activeIndex !== this.props.activeIndex) {
      lightboxElement.show(nextProps.activeIndex);
    }
    if (nextProps.shown === true && this.props.shown === false) {
      lightboxElement.show(nextProps.activeIndex || 0);
    }
    if (nextProps.shown === false && this.props.shown === true) {
      lightboxElement.hide();
    }

    // Add event listeners to the Lightbox Panel after it appears.
    const panelElement = document.querySelector('.uk-lightbox');
    if (!panelElement) return;
    LightboxPanel.addEventListeners(this.props, panelElement);
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
      selectorToggle,
      shown,
      videoAutoplay,
      ...rest
    } = this.props;

    const animationName = isPlainObject(animation)
      ? get(animation, 'name', 'slide')
      : animation;

    const componentOptions = getOptionsString({
      animation: animationName,
      autoplay: get(autoplay, 'delay', 0),
      autoplayInterval: get(autoplay, 'interval', 0),
      index: defaultIndex,
      pauseOnHover,
      toggle: selectorToggle,
      velocity: get(animation, 'velocity', 2),
      videoAutoplay,
    });

    return (
      <BlockElement
        {...rest}
        ref={this.handleRef}
        data-uk-lightbox={componentOptions.replace('uk-animation-', '')}
      />
    );
  }
}
