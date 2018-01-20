import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isObject } from 'lodash';
import { buildClassName } from '../../lib';
import { BlockElement } from '../Base';

export default class SubnavItem extends BlockElement {
  static meta = {
    name: 'SubnavItem',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
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
        {isObject(children) ? children : <a href={href}>{children}</a>}
      </li>
    );
  }
}
