import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { InlineElement } from '../Base';

export default class Label extends InlineElement {
  static meta = {
    name: 'Label',
    ukClass: 'uk-label',
  };

  static propTypes = {
    ...InlineElement.propTypes,
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
      children,
      className,
      danger,
      success,
      warning,
      ...rest
    } = this.props;

    const classes = classnames(className, Label.meta.ukClass, {
      [buildClassName(Label.meta.ukClass, 'danger')]: danger,
      [buildClassName(Label.meta.ukClass, 'success')]: success,
      [buildClassName(Label.meta.ukClass, 'warning')]: warning,
    });

    return (
      <InlineElement {...rest} as="span" className={classes || undefined}>
        {children}
      </InlineElement>
    );
  }
}
