import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import noop from 'lodash/noop';
import {
  addMultipleEventInvokers,
  buildClassName,
  customPropTypes,
  getOptionsString,
  LibraryComponent,
  UIK,
} from '../../../lib';
import Base from '../../base';
import TabItem from './TabItem';

export default class Tab extends React.Component {
  static displayName = 'Tab';

  static propTypes = {
    ...Base.propTypes,
    activeIndex: customPropTypes.validateIndex,
    align: PropTypes.oneOf(['bottom', 'left', 'right']),
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.arrayOf(UIK.ANIMATIONS),
      PropTypes.shape({
        in: PropTypes.oneOfType([
          PropTypes.oneOf(UIK.ANIMATIONS),
          PropTypes.arrayOf(UIK.ANIMATIONS),
        ]),
        out: PropTypes.oneOfType([
          PropTypes.oneOf(UIK.ANIMATIONS),
          PropTypes.arrayOf(UIK.ANIMATIONS),
        ]),
        duration: PropTypes.number,
      }),
    ]),
    as: customPropTypes.customOrStringElement('ul'),
    defaultIndex: customPropTypes.validateIndex,
    media: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(UIK.BREAKPOINTS),
    ]),
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    swiping: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    activeIndex: 0,
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
  };

  static Item = TabItem;

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('tab');
    this.tab = null;
  }

  componentDidMount() {
    this.tab = UIkit.tab(this.libComp.cssSelector);

    const ukToPropsEventMap = {
      beforehide: 'onBeforeHide',
      beforeshow: 'onBeforeShow',
      hidden: 'onHidden',
      hide: 'onHide',
      show: 'onShow',
      shown: 'onShown',
    };
    addMultipleEventInvokers(this.tab, ukToPropsEventMap, this.props);
    this.tab.show(this.props.activeIndex);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeIndex !== this.props.activeIndex) {
      this.tab.show(nextProps.activeIndex);
    }
  }

  render() {
    const {
      align,
      animation,
      className,
      defaultIndex,
      media,
      swiping,
      ...rest
    } = this.props;

    const classes = classnames(className, buildClassName('tab', align));

    const componentOptions = getOptionsString({
      animation,
      active: defaultIndex,
      media,
      swiping,
    });

    return (
      <Base
        {...rest}
        baseRef={this.handleRef}
        className={classes}
        component={Tab}
        uk-tab={componentOptions}
        {...this.libComp.appendProps(this.props)}
      />
    );
  }
}
