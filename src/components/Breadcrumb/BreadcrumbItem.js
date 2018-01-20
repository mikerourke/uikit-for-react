import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { BlockElement } from '../Base';

export default class BreadcrumbItem extends BlockElement {
  static meta = {
    name: 'BreadcrumbItem',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    active: PropTypes.bool,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    className: PropTypes.string,
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
      [buildClassName('disabled')]: disabled,
    });

    const InnerElement = active ? 'span' : 'a';
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
