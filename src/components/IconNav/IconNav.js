import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { restrictToChildTypes } from '../../lib';
import { Block } from '../Base';
import IconNavItem from './IconNavItem';

export default class IconNav extends Block {
  static meta = {
    name: 'IconNav',
    ukClass: 'uk-iconnav',
  };

  static propTypes = {
    ...Block.propTypes,
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
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      children,
      className,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      IconNav.meta.ukClass,
    );

    return (
      <ul
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        {...attributes}
      >
        {children}
      </ul>
    );
  }
}
