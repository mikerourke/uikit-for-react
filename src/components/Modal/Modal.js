import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import UIkit from 'uikit';
import { get, noop } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getOptionsString, UIK,
} from '../../lib';
import ModalBody from './ModalBody';
import ModalDialog from './ModalDialog';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalTitle from './ModalTitle';

class Modal extends React.Component {
  static meta = {
    name: 'Modal',
    ukClass: 'uk-modal',
  };

  static propTypes = {
    alignItems: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),
    bgClose: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    container: PropTypes.bool,
    escClose: PropTypes.bool,
    full: PropTypes.bool,
    justifyContent: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS)),
    ]),
    margin: commonPropTypes.margin,
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    padding: commonPropTypes.padding,
    selectorContainer: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
    shown: PropTypes.bool,
    stack: PropTypes.bool,
  };

  static Body = ModalBody;
  static Dialog = ModalDialog;
  static Footer = ModalFooter;
  static Header = ModalHeader;
  static Title = ModalTitle;

  componentDidMount() {
    UIkit.util.on(this.ref, 'beforeshow', get(this.props, 'onBeforeShow', noop));
    UIkit.util.on(this.ref, 'show', get(this.props, 'onShow', noop));
    UIkit.util.on(this.ref, 'shown', get(this.props, 'onShown', noop));
    UIkit.util.on(this.ref, 'beforehide', get(this.props, 'onBeforeHide', noop));
    UIkit.util.on(this.ref, 'hide', get(this.props, 'onHide', noop));
    UIkit.util.on(this.ref, 'hidden', get(this.props, 'onHidden', noop));
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
      alignItems,
      bgClose,
      children,
      className,
      container,
      escClose,
      full,
      justifyContent,
      margin,
      onBeforeHide,
      onBeforeShow,
      onHidden,
      onHide,
      onShow,
      onShown,
      padding,
      selectorContainer,
      shown,
      stack,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Modal.meta.ukClass,
      buildObjectOrValueClassNames('flex', alignItems),
      buildObjectOrValueClassNames('flex', justifyContent),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
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

    return (
      <div
        {...rest}
        className={classes}
        ref={this.handleRef}
        data-uk-modal={componentOptions}
      >
        {children}
      </div>
    );
  }
}

export default Modal;
