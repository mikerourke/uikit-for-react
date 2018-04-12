import React from 'react';
import UIkit from 'uikit';
import ExtraPropTypes from 'airbnb-prop-types';
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
import SlideshowItem from './SlideshowItem';
import SlideshowItems from './SlideshowItems';

export default class Slideshow extends React.Component {
  static displayName = 'Slideshow';

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
    defaultIndex: customPropTypes.validateIndex,
    finite: PropTypes.bool,
    maxHeight: PropTypes.oneOfType([
      PropTypes.bool,
      ExtraPropTypes.nonNegativeInteger,
    ]),
    minHeight: PropTypes.oneOfType([
      PropTypes.bool,
      ExtraPropTypes.nonNegativeInteger,
    ]),
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
    as: 'div',
    onBeforeItemHide: noop,
    onBeforeItemShow: noop,
    onItemHidden: noop,
    onItemHide: noop,
    onItemShow: noop,
    onItemShown: noop,
    paused: false,
  };

  static Item = SlideshowItem;
  static Items = SlideshowItems;

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
      const slideshow = UIkit.slideshow(this.ref);
      if (nextProps.paused === true) {
        slideshow.stopAutoplay();
      }
      if (nextProps.paused === false) {
        slideshow.startAutoplay();
      }
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      animation,
      autoplay,
      defaultIndex,
      finite,
      maxHeight,
      minHeight,
      pauseOnHover,
      ratio,
      ...rest
    } = this.props;

    const componentOptions = getOptionsString({
      activeIndex: defaultIndex,
      animation,
      autoplay: isPlainObject(autoplay) ? get(autoplay, 'enabled') : autoplay,
      autoplayInterval: get(autoplay, 'interval'),
      finite,
      maxHeight,
      minHeight,
      pauseOnHover,
      ratio,
    });

    return (
      <Ref innerRef={this.handleRef}>
        <Base {...rest} component={Slideshow} uk-slideshow={componentOptions} />
      </Ref>
    );
  }
}
