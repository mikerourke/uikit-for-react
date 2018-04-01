import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import {
  addMultipleEventInvokers,
  customPropTypes,
  getOptionsString,
  LibraryComponent,
} from '../../../lib';
import Base from '../../base';
import OffcanvasBar from './OffcanvasBar';
import OffcanvasClose from './OffcanvasClose';
import OffcanvasContent from './OffcanvasContent';
import OffcanvasToggle from './OffcanvasToggle';

export default class Offcanvas extends React.Component {
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
      ...rest
    } = this.props;

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
        component={Offcanvas}
        uk-offcanvas={componentOptions}
        {...this.libComp.appendProps(this.props)}
      />
    );
  }
}
