import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { Inline } from '../Base';

export default class Label extends Inline {
  static meta = {
    name: 'Label',
    ukClass: 'uk-label',
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    danger: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
  };

  static defaultProps = {
    danger: false,
    success: false,
    warning: false,
  };

  render() {
    const {
      attributes,
      inlineClasses,
      inlineStyle,
      unhandledProps,
    } = this.getInlineElements(this.props);

    const {
      children,
      className,
      danger,
      success,
      warning,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inlineClasses,
      Label.meta.ukClass,
      {
        [buildClassName(Label.meta.ukClass, 'danger')]: (danger),
        [buildClassName(Label.meta.ukClass, 'success')]: (success),
        [buildClassName(Label.meta.ukClass, 'warning')]: (warning),
      },
    );

    return (
      <span
        {...rest}
        className={classes}
        style={inlineStyle}
        {...attributes}
      >
        {children}
      </span>
    );
  }
}
