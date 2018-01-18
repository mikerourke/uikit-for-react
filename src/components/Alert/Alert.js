import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import UIkit from 'uikit';
import { get, noop } from 'lodash';
import {
  buildClassName,
  getElementType,
  getIfHasChildType,
  getOptionsString,
  UIK,
} from '../../lib';
import { Block } from '../Base';
import Close from '../Close';

export default class Alert extends Block {
  static meta = {
    name: 'Alert',
    ukClass: 'uk-alert',
  };

  static propTypes = {
    ...Block.propTypes,
    animation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.shape({
        name: PropTypes.oneOf(UIK.ANIMATIONS),
        duration: PropTypes.number,
      }),
    ]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    closeable: PropTypes.bool,
    closeOptions: PropTypes.shape({
      className: PropTypes.string,
      large: PropTypes.bool,
    }),
    danger: PropTypes.bool,
    onBeforeHide: PropTypes.func,
    onHide: PropTypes.func,
    primary: PropTypes.bool,
    selectorClose: PropTypes.string,
    success: PropTypes.bool,
    warning: PropTypes.bool,
  };

  static defaultProps = {
    as: 'div',
    closeable: false,
  };

  componentDidMount() {
    UIkit.util.on(this.ref, 'beforehide', get(this.props, 'onBeforeHide', noop));
    UIkit.util.on(this.ref, 'hide', get(this.props, 'onHide', noop));
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
      animation,
      as,
      children,
      className,
      closeable,
      closeOptions,
      danger,
      onBeforeHide,
      onHide,
      primary,
      selectorClose,
      success,
      warning,
      ...rest
    } = unhandledProps;

    if (closeable && getIfHasChildType(children, Close)) {
      throw new Error('You cannot have an instance of Close inside an Alert if the closeable prop is true.');
    }

    const classes = classnames(
      className,
      blockClasses,
      Alert.meta.ukClass,
      {
        [buildClassName(Alert.meta.ukClass, 'danger')]: (danger),
        [buildClassName(Alert.meta.ukClass, 'primary')]: (primary),
        [buildClassName(Alert.meta.ukClass, 'success')]: (success),
        [buildClassName(Alert.meta.ukClass, 'warning')]: (warning),
      },
    );

    const componentOptions = getOptionsString({
      animation,
      selClose: selectorClose,
    });

    const closeClasses = classnames(
      get(closeOptions, 'className'),
      buildClassName('alert', 'close'),
      {
        [buildClassName('close', 'large')]: (get(closeOptions, 'large')),
      },
    );

    const Element = getElementType(Alert, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        style={blockStyle}
        data-uk-alert={componentOptions}
        {...attributes}
      >
        {(closeable) && <button className={closeClasses} type="button" data-uk-close />}
        {children}
      </Element>
    );
  }
}
