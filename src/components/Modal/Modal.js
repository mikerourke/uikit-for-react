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
  getOptionsString,
} from '../../lib';
import Base from '../Base';
import Ref from '../Ref';
import ModalAlert from './ModalAlert';
import ModalBody from './ModalBody';
import ModalClose from './ModalClose';
import ModalConfirm from './ModalConfirm';
import ModalContent from './ModalContent';
import ModalDialog from './ModalDialog';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalPrompt from './ModalPrompt';
import ModalTitle from './ModalTitle';
import ModalToggle from './ModalToggle';

export default class Modal extends React.Component {
  static displayName = 'Modal';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
    bgClose: PropTypes.bool,
    children: ExtraPropTypes.elementType(ModalDialog),
    clsPage: PropTypes.string,
    clsPanel: PropTypes.string,
    container: PropTypes.bool,
    escClose: PropTypes.bool,
    full: PropTypes.bool,
    modalName: PropTypes.string,
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    selClose: PropTypes.string,
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

  static Alert = ModalAlert;
  static Body = ModalBody;
  static Close = ModalClose;
  static Confirm = ModalConfirm;
  static Content = ModalContent;
  static Dialog = ModalDialog;
  static Footer = ModalFooter;
  static Header = ModalHeader;
  static Prompt = ModalPrompt;
  static Title = ModalTitle;
  static Toggle = ModalToggle;

  constructor(props) {
    super(props);
    this.ref = null;
    this.modal = null;
    this.selector = generateSelector();
  }

  componentDidMount() {
    this.modal = UIkit.modal(this.ref, {
      'cls-page': this.props.clsPage,
      'cls-panel': this.props.clsPanel,
      'sel-close': this.props.selClose,
    });

    const ukToPropsEventMap = {
      beforehide: 'onBeforeHide',
      beforeshow: 'onBeforeShow',
      hidden: 'onHidden',
      hide: 'onHide',
      show: 'onShow',
      shown: 'onShown',
    };
    addMultipleEventInvokers(this.modal, ukToPropsEventMap, this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shown !== this.props.shown) {
      if (nextProps.shown === true) {
        this.modal.show();
      }
      if (nextProps.shown === false) {
        this.modal.hide();
      }
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      bgClose,
      className,
      container,
      escClose,
      full,
      modalName,
      stack,
      toggle,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-modal', this.selector, {
      'uk-modal-container': container,
      'uk-modal-full': full,
    });

    return (
      <Fragment>
        {!isNil(toggle) &&
          React.cloneElement(toggle, {
            target: `.${this.selector}`,
          })}
        <Ref innerRef={this.handleRef}>
          <Base
            {...rest}
            baseId={this.props.id}
            className={classes}
            component={Modal}
            modal-name={modalName}
            uk-modal={getOptionsString({ bgClose, escClose, stack })}
          />
        </Ref>
      </Fragment>
    );
  }
}
