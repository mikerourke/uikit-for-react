import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import {
  addMultipleEventInvokers,
  customPropTypes,
  getOptionsString,
} from '../../lib';
import Base from '../Base';
import Ref from '../Ref';
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
    shown: PropTypes.bool,
    toggleIndex: PropTypes.number,
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

  static Bar = OffcanvasBar;
  static Close = OffcanvasClose;
  static Content = OffcanvasContent;
  static Toggle = OffcanvasToggle;

  constructor(props) {
    super(props);
    this.ref = null;
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
    addMultipleEventInvokers(this.ref, ukToPropsEventMap, this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shown !== this.props.shown) {
      const offcanvas = UIkit.offcanvas(this.ref);
      if (nextProps.shown === true) {
        offcanvas.show();
      }
      if (nextProps.shown === false) {
        offcanvas.hide();
      }
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      bgClose,
      escClose,
      flip,
      mode,
      overlay,
      toggleIndex,
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
      <Ref innerRef={this.handleRef} data-index={toggleIndex}>
        <Base
          {...rest}
          baseId={this.props.id}
          component={Offcanvas}
          uk-offcanvas={componentOptions}
        />
      </Ref>
    );
  }
}
