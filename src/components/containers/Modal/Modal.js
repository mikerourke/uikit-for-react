import React, { Fragment } from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
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
import { ToggleToggle } from '../../elements/Toggle';
import ModalBody from './ModalBody';
import ModalClose from './ModalClose';
import ModalContent from './ModalContent';
import ModalDialog from './ModalDialog';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalTitle from './ModalTitle';

export default class Modal extends React.Component {
  static displayName = 'Modal';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
    bgClose: PropTypes.bool,
    children: ExtraPropTypes.elementType(ModalDialog),
    container: PropTypes.bool,
    escClose: PropTypes.bool,
    full: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    shown: PropTypes.bool,
    stack: PropTypes.bool,
    toggle: PropTypes.element,
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

  static Body = ModalBody;
  static Close = ModalClose;
  static Content = ModalContent;
  static Dialog = ModalDialog;
  static Footer = ModalFooter;
  static Header = ModalHeader;
  static Title = ModalTitle;

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

  componentWillReceiveProps(nextProps) {
    const modal = UIkit.modal(this.getRef());
    if (nextProps.shown === true && this.props.shown === false) {
      modal.show();
    }
    if (nextProps.shown === false && this.props.shown === true) {
      modal.hide();
    }
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
      container,
      escClose,
      full,
      id,
      stack,
      toggle,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-modal', this.selector, {
      'uk-modal-container': container,
      'uk-modal-full': full,
    });

    let Toggle = null;
    if (toggle) Toggle = toggle.type;

    return (
      <Fragment>
        {toggle && (
          <Toggle
            {...toggle.props}
            as={ToggleToggle}
            target={`.${this.selector}`}
          />
        )}
        <Base
          {...rest}
          baseId={id}
          baseRef={this.handleRef}
          className={classes}
          component={Modal}
          uk-modal={getOptionsString({ bgClose, escClose, stack })}
        />
      </Fragment>
    );
  }
}
