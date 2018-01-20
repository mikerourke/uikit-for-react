import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { BlockElement } from '../Base';

export default class DotnavItem extends BlockElement {
  static meta = {
    name: 'DotnavItem',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
  };

  static defaultProps = {
    active: false,
  };

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const { active, children, className, href, ...rest } = unhandledProps;

    const classes = classnames(className, inheritedClasses, {
      [buildClassName('active')]: active,
    });

    return (
      <li
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        <a href={href}>{children}</a>
      </li>
    );
  }
}
