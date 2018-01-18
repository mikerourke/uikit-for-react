import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
  restrictToChildTypes,
  UIK,
} from '../../lib';
import { Block } from '../Base';

export default class NavbarGroup extends Block {
  static meta = {
    name: 'NavbarGroup',
  };

  static propTypes = {
    ...Block.propTypes,
    align: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS).isRequired,
    children: restrictToChildTypes(),
    className: PropTypes.string,
  };

  render() {
    const {
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      align,
      children,
      className,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      buildClassName('navbar', align),
    );

    const Element = getElementType(NavbarGroup, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        {...attributes}
      >
        {children}
      </Element>
    );
  }
}
