import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { BlockElement } from '../Base';

export default class PaginationItem extends BlockElement {
  static meta = {
    name: 'PaginationItem',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    active: PropTypes.bool,
    children: PropTypes.number,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
  };

  static defaultProps = {
    active: false,
    disabled: false,
  };

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      active,
      children,
      className,
      disabled,
      href,
      ...rest
    } = unhandledProps;

    const classes = classnames(className, inheritedClasses, {
      [buildClassName('active')]: active,
      [buildClassName('disabled')]: disabled,
    });

    const InnerElement = active || disabled ? 'span' : 'a';
    return (
      <li
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        <InnerElement href={href}>{children}</InnerElement>
      </li>
    );
  }
}
