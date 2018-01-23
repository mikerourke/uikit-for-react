import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, noop } from 'lodash';
import { buildClassName, getOptionsString } from '../../lib';
import { BlockElement } from '../Base';
import Close from '../Close';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalTitle from './ModalTitle';

export default class Modal extends BlockElement {
  static displayName = 'Modal';

  static propTypes = {
    ...BlockElement.propTypes,
    bgClose: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    closeButton: PropTypes.bool,
    closeOptions: PropTypes.shape({
      ...Close.propTypes,
      outside: PropTypes.bool,
    }),
    container: PropTypes.bool,
    dialogOptions: PropTypes.shape(BlockElement.propTypes),
    escClose: PropTypes.bool,
    full: PropTypes.bool,
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    padContent: PropTypes.bool,
    selectorContainer: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    shown: PropTypes.bool,
    stack: PropTypes.bool,
    toggle: PropTypes.element,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    bgClose: true,
    className: null,
    closeButton: false,
    closeOptions: null,
    container: false,
    dialogOptions: null,
    escClose: true,
    full: false,
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
    padContent: false,
    selectorContainer: null,
    shown: false,
    stack: false,
    toggle: null,
  };

  static Content = ModalContent;
  static Footer = ModalFooter;
  static Header = ModalHeader;
  static Title = ModalTitle;

  componentDidMount() {
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

  handleRef = element => (this.ref = element);

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

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
      toggle,
      ...rest
    } = unhandledProps;

    const ukClass = 'uk-modal';
    const classes = classnames(className, inheritedClasses, ukClass, {
      [buildClassName(ukClass, 'container')]: container,
      [buildClassName(ukClass, 'full')]: full,
    });

    const componentOptions = getOptionsString({
      bgClose,
      container: selectorContainer,
      escClose,
      stack,
    });

    const closeOutside = get(closeOptions, 'outside', false);
    const closeClasses = classnames(get(closeOptions, 'className', ''), {
      [buildClassName(ukClass, 'close', 'default')]: !closeOutside,
      [buildClassName(ukClass, 'close', 'outside')]: closeOutside,
    });

    const dialogClasses = classnames(
      get(dialogOptions, 'className', ''),
      buildClassName(ukClass, 'dialog'),
      {
        [buildClassName(ukClass, 'body')]: padContent,
      },
    );

    return (
      <div
        {...rest}
        className={classes}
        ref={this.handleRef}
        style={inheritedStyle}
        data-uk-modal={componentOptions}
        {...inheritedAttributes}
      >
        <div {...dialogOptions} className={dialogClasses}>
          {closeButton && <Close {...closeOptions} className={closeClasses} />}
          {children}
        </div>
      </div>
    );
  }
}
