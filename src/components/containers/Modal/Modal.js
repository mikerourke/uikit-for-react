import React, { Fragment } from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { isNil, noop } from 'lodash';
import {
  buildClassName,
  customPropTypes,
  generateIdentifier,
  generateSelector,
  getBaseRef,
  getOptionsString,
} from '../../../lib';
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
    as: customPropTypes.customOrStringElement('div'),
    bgClose: PropTypes.bool,
    children: ExtraPropTypes.elementType(ModalDialog),
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
    shown: PropTypes.bool,
    stack: PropTypes.bool,
    toggle: PropTypes.element,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
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

  constructor() {
    super();
    this.selector = generateSelector();
  }

  componentDidMount() {
    const ref = this.getRef();
    UIkit.util.on(ref, 'beforehide', this.props.onBeforeHide);
    UIkit.util.on(ref, 'beforeshow', this.props.onBeforeShow);
    UIkit.util.on(ref, 'hidden', this.props.onHidden);
    UIkit.util.on(ref, 'hide', this.props.onHide);
    UIkit.util.on(ref, 'show', this.props.onShow);
    UIkit.util.on(ref, 'shown', this.props.onShown);
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
      onBeforeHide,
      onBeforeShow,
      onHidden,
      onHide,
      onShow,
      onShown,
      shown,
      stack,
      toggle,
      ...rest
    } = this.props;

    const ukClass = 'uk-modal';
    const classes = classnames(className, ukClass, this.selector, {
      [buildClassName(ukClass, 'container')]: container,
      [buildClassName(ukClass, 'full')]: full,
    });

    const componentOptions = getOptionsString({
      bgClose,
      escClose,
      stack,
    });

    let Toggle;
    const identifier = generateIdentifier();
    if (toggle) {
      Toggle = React.cloneElement(toggle, {
        href: `#${identifier}`,
        'data-uk-toggle': '',
      });
    }

    return (
      <Fragment>
        {toggle && Toggle}
        <BlockElement
          {...rest}
          className={classes}
          id={identifier}
          ref={this.handleRef}
          data-uk-modal={componentOptions}
        />
      </Fragment>
    );
  }
}
