import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import noop from 'lodash/noop';
import {
  addMultipleEventInvokers,
  customPropTypes,
  generateSelector,
  getBaseRef,
  getOptionsString,
} from '../../../lib';
import Base from '../../base';

export default class Offcanvas extends React.Component {
  static displayName = 'Offcanvas';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('form'),
    bgClose: PropTypes.bool,
    children: PropTypes.node.isRequired,
    escClose: PropTypes.bool,
    flip: PropTypes.bool,
    mode: PropTypes.oneOf(['none', 'push', 'reveal', 'slide']),
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    overlay: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'form',
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
  };

  constructor() {
    super();
    this.selector = generateSelector();
  }

  componentDidMount() {
    const ref = this.getRef();
    const ukToPropsEventMap = {
      beforehide: 'onBeforeHide',
      beforeshow: 'onBeforeShow',
      hidden: 'onHidden',
      hide: 'onHide',
      show: 'onShow',
      shown: 'onShown',
    };
    addMultipleEventInvokers(ref, ukToPropsEventMap, this.props);
  }

  getRef = () => (isNil(this.ref) ? `.${this.selector}` : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  render() {
    const {
      bgClose,
      className,
      escClose,
      flip,
      mode,
      overlay,
      ...rest
    } = this.props;

    const classes = classnames(className, this.selector);

    const componentOptions = getOptionsString({
      bgClose,
      escClose,
      flip,
      mode,
      overlay,
    });

    return (
      <Base
        {...rest}
        className={classes}
        component={Offcanvas}
        baseRef={this.handleRef}
        uk-offcanvas={componentOptions}
      />
    );
  }
}
