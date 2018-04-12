import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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

export default class Tooltip extends React.Component {
  static displayName = 'Tooltip';

  static propTypes = {
    ...Base.propTypes,
    alignTo: PropTypes.oneOf([
      'bottom',
      'bottom-left',
      'bottom-right',
      'left',
      'right',
      'top',
      'top-left',
      'top-right',
    ]),
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
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    clsActive: PropTypes.string,
    delay: PropTypes.number,
    offset: PropTypes.number,
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    shown: PropTypes.bool,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
    shown: false,
  };

  constructor(props) {
    super(props);
    this.ref = null;
    this.tooltip = null;
  }

  componentDidMount() {
    this.tooltip = UIkit.tooltip(this.ref);

    const ukToPropsEventMap = {
      beforehide: 'onBeforeHide',
      beforeshow: 'onBeforeShow',
      hidden: 'onHidden',
      hide: 'onHide',
      show: 'onShow',
      shown: 'onShown',
    };
    addMultipleEventInvokers(this.tooltip, ukToPropsEventMap, this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shown !== this.props.shown) {
      if (nextProps.shown === true) {
        this.tooltip.show();
      }
      if (nextProps.shown === false) {
        this.tooltip.hide();
      }
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      alignTo,
      animation,
      className,
      clsActive,
      delay,
      offset,
      shown,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-tooltip');

    const componentOptions = getOptionsString({
      animation,
      cls: clsActive,
      delay,
      offset,
      pos: alignTo,
    });

    return (
      <Ref innerRef={this.handleRef}>
        <Base
          {...rest}
          className={classes}
          component={Tooltip}
          uk-tooltip={componentOptions}
        />
      </Ref>
    );
  }
}
