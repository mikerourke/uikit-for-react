import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import isPlainObject from 'lodash/isPlainObject';
import noop from 'lodash/noop';
import {
  addMultipleEventInvokers,
  customPropTypes,
  getOptionsString,
  HTML,
  UIK,
} from '../../lib';
import Base from '../Base';
import Ref from '../Ref';
import SliderContainer from './SliderContainer';
import SliderItem from './SliderItem';
import SliderItems from './SliderItems';
import SliderNext from './SliderNext';
import SliderPrevious from './SliderPrevious';

export default class Slider extends React.Component {
  static displayName = 'Slider';

  static propTypes = {
    ...Base.propTypes,
    activeIndex: customPropTypes.validateIndex,
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.SLIDESHOW_ANIMATIONS),
      PropTypes.shape({
        name: PropTypes.oneOf(UIK.SLIDESHOW_ANIMATIONS),
        velocity: PropTypes.number,
      }),
    ]),
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    autoplay: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        enabled: PropTypes.bool,
        interval: PropTypes.number,
      }),
    ]),
    center: PropTypes.bool,
    children: PropTypes.node,
    defaultIndex: customPropTypes.validateIndex,
    finite: PropTypes.bool,
    onBeforeItemHide: PropTypes.func,
    onBeforeItemShow: PropTypes.func,
    onItemHidden: PropTypes.func,
    onItemHide: PropTypes.func,
    onItemShow: PropTypes.func,
    onItemShown: PropTypes.func,
    paused: PropTypes.bool,
    pauseOnHover: PropTypes.bool,
    sets: PropTypes.bool,
  };

  static defaultProps = {
    as: 'div',
    onBeforeItemHide: noop,
    onBeforeItemShow: noop,
    onItemHidden: noop,
    onItemHide: noop,
    onItemShow: noop,
    onItemShown: noop,
    paused: false,
  };

  static Container = SliderContainer;
  static Item = SliderItem;
  static Items = SliderItems;
  static Next = SliderNext;
  static Previous = SliderPrevious;

  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentDidMount() {
    const ukToPropsEventMap = {
      beforeitemhide: 'onBeforeItemHide',
      beforeitemshow: 'onBeforeItemShow',
      itemhidden: 'onItemHidden',
      itemhide: 'onItemHide',
      itemshow: 'onItemShow',
      itemshown: 'onItemShown',
    };
    addMultipleEventInvokers(this.ref, ukToPropsEventMap, this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.paused !== this.props.paused) {
      const slider = UIkit.slider(this.ref);
      if (nextProps.paused === true) {
        slider.stopAutoplay();
      }
      if (nextProps.paused === false) {
        slider.startAutoplay();
      }
    }

    if (nextProps.activeIndex !== this.props.activeIndex) {
      UIkit.slider(this.ref).show(nextProps.activeIndex);
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      activeIndex,
      animation,
      autoplay,
      center,
      defaultIndex,
      finite,
      paused,
      pauseOnHover,
      sets,
      ...rest
    } = this.props;

    const componentOptions = getOptionsString({
      activeIndex: defaultIndex,
      animation,
      autoplay: isPlainObject(autoplay) ? get(autoplay, 'enabled') : autoplay,
      autoplayInterval: get(autoplay, 'interval'),
      center,
      finite,
      pauseOnHover,
      sets,
    });

    return (
      <Ref innerRef={this.handleRef}>
        <Base {...rest} component={Slider} uk-slider={componentOptions} />
      </Ref>
    );
  }
}
