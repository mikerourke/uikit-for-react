import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { restrictToChildTypes } from '../../lib';
import { BlockElement } from '../Base';
import IconNavItem from './IconNavItem';

export default class IconNav extends BlockElement {
  static meta = {
    name: 'IconNav',
    ukClass: 'uk-iconnav',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    children: restrictToChildTypes(IconNavItem),
    className: PropTypes.string,
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    vertical: false,
  };

  static Item = IconNavItem;

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const { children, className, ...rest } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      IconNav.meta.ukClass,
    );

    return (
      <ul
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {children}
      </ul>
    );
  }
}
