import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, noop } from 'lodash';
import {
  buildClassName,
  getOptionsString,
} from '../../lib';
import { Block } from '../Base';
import Close from '../Close';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalTitle from './ModalTitle';

export default class Modal extends Block {
  static meta = {
    name: 'Modal',
    ukClass: 'uk-modal',
  };

  static propTypes = {
    ...Block.propTypes,
    bgClose: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    closeButton: PropTypes.bool,
    closeOptions: PropTypes.shape({
      ...Close.propTypes,
      outside: PropTypes.bool,
    }),
    container: PropTypes.bool,
    dialogOptions: PropTypes.shape(Block.propTypes),
    escClose: PropTypes.bool,
    full: PropTypes.bool,
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    padContent: PropTypes.bool,
    selectorContainer: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
    shown: PropTypes.bool,
    stack: PropTypes.bool,
    toggle: PropTypes.element,
  };

  static defaultProps = {
    bgClose: true,
    closeButton: false,
    container: false,
    escClose: true,
    full: false,
    padContent: false,
    shown: false,
    stack: false,
  };

  static Content = ModalContent;
  static Footer = ModalFooter;
  static Header = ModalHeader;
  static Title = ModalTitle;

  componentDidMount() {
    UIkit.util.on(this.ref, 'beforehide', get(this.props, 'onBeforeHide', noop));
    UIkit.util.on(this.ref, 'beforeshow', get(this.props, 'onBeforeShow', noop));
    UIkit.util.on(this.ref, 'hidden', get(this.props, 'onHidden', noop));
    UIkit.util.on(this.ref, 'hide', get(this.props, 'onHide', noop));
    UIkit.util.on(this.ref, 'show', get(this.props, 'onShow', noop));
    UIkit.util.on(this.ref, 'shown', get(this.props, 'onShown', noop));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shown === true && this.props.shown === false) {
      UIkit.modal(this.ref).show();
    }

    if (nextProps.shown === false && this.props.shown === true) {
      UIkit.modal(this.ref).hide();
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      bgClose,
      children,
      className,
      closeButton,
      closeOptions,
      container,
      dialogOptions,
      escClose,
      full,
      onBeforeHide,
      onBeforeShow,
      onHidden,
      onHide,
      onShow,
      onShown,
      padContent,
      selectorContainer,
      shown,
      stack,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      Modal.meta.ukClass,
      {
        [buildClassName(Modal.meta.ukClass, 'container')]: (container),
        [buildClassName(Modal.meta.ukClass, 'full')]: (full),
      },
    );

    const componentOptions = getOptionsString({
      escClose,
      bgClose,
      stack,
      container: selectorContainer,
    });

    const closeOutside = get(closeOptions, 'outside', false);
    const closeClasses = classnames(
      get(closeOptions, 'className', ''),
      {
        [buildClassName(Modal.meta.ukClass, 'close', 'default')]: (closeOutside === false),
        [buildClassName(Modal.meta.ukClass, 'close', 'outside')]: (closeOutside === true),
      },
    );

    const dialogClasses = classnames(
      get(dialogOptions, 'className', ''),
      buildClassName(Modal.meta.ukClass, 'dialog'),
      {
        [buildClassName(Modal.meta.ukClass, 'body')]: (padContent),
      },
    );

    return (
      <div
        {...rest}
        className={classes}
        ref={this.handleRef}
        style={blockStyle}
        data-uk-modal={componentOptions}
        {...attributes}
      >
        <div {...dialogOptions} className={dialogClasses}>
          {closeButton && <Close {...closeOptions} className={closeClasses} />}
          {children}
        </div>
      </div>
    );
  }
}
