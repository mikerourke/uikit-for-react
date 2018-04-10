import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import isNil from 'lodash/isNil';
import isString from 'lodash/isString';
import noop from 'lodash/noop';
import {
  addMultipleEventInvokers,
  customPropTypes,
  getOptionsString,
  LibraryComponent,
} from '../../lib';
import Base from '../Base';
import OffcanvasBar from './OffcanvasBar';
import OffcanvasClose from './OffcanvasClose';
import OffcanvasContent from './OffcanvasContent';
import OffcanvasToggle from './OffcanvasToggle';

export default class Offcanvas extends Base {
  static displayName = 'Offcanvas';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
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
    toggle: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
      .isRequired,
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
  };

  static Bar = OffcanvasBar;
  static Close = OffcanvasClose;
  static Content = OffcanvasContent;
  static Toggle = OffcanvasToggle;

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('offcanvas');
  }

  componentDidMount() {
    const ukToPropsEventMap = {
      beforehide: 'onBeforeHide',
      beforeshow: 'onBeforeShow',
      hidden: 'onHidden',
      hide: 'onHide',
      show: 'onShow',
      shown: 'onShown',
    };
    addMultipleEventInvokers(
      this.libComp.cssSelector,
      ukToPropsEventMap,
      this.props,
    );
  }

  render() {
    const {
      bgClose,
      escClose,
      flip,
      mode,
      overlay,
      toggle,
      ...rest
    } = this.props;

    const componentOptions = getOptionsString({
      bgClose,
      escClose,
      flip,
      mode,
      overlay,
    });

    const attrValue = isString(toggle) ? toggle : undefined;

    return (
      <Fragment>
        {React.isValidElement(toggle) &&
          React.cloneElement(toggle, {
            target: this.libComp.cssSelector,
          })}
        <Base
          {...rest}
          component={Offcanvas}
          uk-offcanvas={componentOptions}
          {...this.libComp.appendProps(this.props, { attrValue })}
        />
      </Fragment>
    );
  }
}
