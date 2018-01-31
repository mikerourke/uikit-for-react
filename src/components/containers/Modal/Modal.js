import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { isNil, noop } from 'lodash';
import { buildClassName, getOptionsString } from '../../../lib';
import { BlockElement } from '../../base';
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
    ...BlockElement.propTypes,
    bgClose: PropTypes.bool,
    children: CustomPropTypes.elementType(ModalDialog),
    className: PropTypes.string,
    container: PropTypes.bool,
    escClose: PropTypes.bool,
    full: PropTypes.bool,
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    selectorContainer: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    shown: PropTypes.bool,
    stack: PropTypes.bool,
    toggle: PropTypes.element,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    bgClose: true,
    className: '',
    container: false,
    escClose: true,
    full: false,
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
    shown: false,
    stack: false,
  };

  static Body = ModalBody;
  static Close = ModalClose;
  static Content = ModalContent;
  static Dialog = ModalDialog;
  static Footer = ModalFooter;
  static Header = ModalHeader;
  static Title = ModalTitle;

  componentDidMount() {
    if (!this.ref) return;
    UIkit.util.on(this.ref, 'beforehide', this.props.onBeforeHide);
    UIkit.util.on(this.ref, 'beforeshow', this.props.onBeforeShow);
    UIkit.util.on(this.ref, 'hidden', this.props.onHidden);
    UIkit.util.on(this.ref, 'hide', this.props.onHide);
    UIkit.util.on(this.ref, 'show', this.props.onShow);
    UIkit.util.on(this.ref, 'shown', this.props.onShown);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shown === true && this.props.shown === false) {
      UIkit.modal(this.ref).show();
    }

    if (nextProps.shown === false && this.props.shown === true) {
      UIkit.modal(this.ref).hide();
    }
  }

  handleRef = element => {
    if (!element) return;
    this.ref = isNil(element.ref) ? element : element.ref;
  };

  render() {
    const {
      bgClose,
      children,
      className,
      container,
      escClose,
      full,
      onBeforeHide,
      onBeforeShow,
      onHidden,
      onHide,
      onShow,
      onShown,
      selectorContainer,
      shown,
      stack,
      toggle,
      ...rest
    } = this.props;

    const ukClass = 'uk-modal';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'container')]: container,
      [buildClassName(ukClass, 'full')]: full,
    });

    const componentOptions = getOptionsString({
      bgClose,
      container: selectorContainer,
      escClose,
      stack,
    });

    return (
      <BlockElement
        {...rest}
        as="div"
        className={classes}
        ref={this.handleRef}
        data-uk-modal={componentOptions}
      >
        {children}
      </BlockElement>
    );
  }
}
