import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
  restrictToChildTypes,
  UIK,
} from '../../lib';
import { BlockElement } from '../Base';

export default class NavbarGroup extends BlockElement {
  static meta = {
    name: 'NavbarGroup',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    align: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS).isRequired,
    children: restrictToChildTypes(),
    className: PropTypes.string,
  };

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const { align, children, className, ...rest } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      buildClassName('navbar', align),
    );

    const Element = getElementType(NavbarGroup, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {children}
      </Element>
    );
  }
}
