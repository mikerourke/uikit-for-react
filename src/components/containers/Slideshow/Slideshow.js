// TODO: Add toggle and pause functionality.
import React from 'react';
import UIkit from 'uikit';
import ExtraPropTypes from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import noop from 'lodash/noop';
import {
  customPropTypes,
  generateSelector,
  getBaseRef,
  getOptionsString,
  HTML,
  UIK,
} from '../../../lib';
import Base from '../../base';
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
    autoplay: PropTypes.bool,
    autoplayInterval: PropTypes.number,
    children: PropTypes.node,
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
    activeIndex: 0,
    as: 'div',
    autoplay: false,
    autoplayInterval: 7000,
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
  static Items = SlideshowItems;

  constructor() {
    super();
    this.selector = generateSelector();
  }

  componentDidMount() {
    const ref = this.getRef();
    UIkit.util.on(ref, 'beforeitemhide', this.props.onBeforeItemHide);
    UIkit.util.on(ref, 'beforeitemshow', this.props.onBeforeItemShow);
    UIkit.util.on(ref, 'itemhidden', this.props.onItemHidden);
    UIkit.util.on(ref, 'itemhide', this.props.onItemHide);
    UIkit.util.on(ref, 'itemshow', this.props.onItemShow);
    UIkit.util.on(ref, 'itemshown', this.props.onItemShown);
  }

  componentWillReceiveProps(nextProps) {
    const slideshow = UIkit.slideshow(this.getRef());
    if (nextProps.paused === true && this.props.paused === false) {
      slideshow.stopAutoplay();
    }
    if (nextProps.paused === false && this.props.paused === true) {
      slideshow.startAutoplay();
    }
  }

  getRef = () => (isNil(this.ref) ? `.${this.selector}` : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  render() {
    const {
      animation,
      autoplay,
      autoplayInterval,
      children,
      className,
      defaultIndex,
      finite,
      maxHeight,
      minHeight,
      pauseOnHover,
      ratio,
      ...rest
    } = this.props;

    const classes = classnames(className, this.selector);

    const componentOptions = getOptionsString({
      activeIndex: defaultIndex,
      animation,
      autoplay,
      autoplayInterval,
      finite,
      maxHeight,
      minHeight,
      pauseOnHover,
      ratio,
    });

    return (
      <Base
        {...rest}
        baseRef={this.handleRef}
        className={classes}
        component={Slideshow}
        data-uk-slideshow={componentOptions}
      >
        {children}
      </Base>
    );
  }
}
