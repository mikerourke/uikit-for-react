import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { BlockElement } from '../Base';
import Grid from '../Grid';

export default class Form extends BlockElement {
  static meta = {
    name: 'Form',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.instanceOf(Grid),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    horizontal: PropTypes.bool,
    stacked: PropTypes.bool,
  };

  static defaultProps = {
    horizontal: false,
    stacked: false,
  };

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      children,
      className,
      horizontal,
      stacked,
      ...rest
    } = unhandledProps;

    const classes = classnames(className, inheritedClasses, Form.meta.ukClass, {
      [buildClassName(Form.meta.ukClass, 'horizontal')]: horizontal,
      [buildClassName(Form.meta.ukClass, 'stacked')]: stacked,
    });

    return (
      <form
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {children}
      </form>
    );
  }
}
