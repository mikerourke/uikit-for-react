import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { restrictToChildTypes } from '../../lib';
import { Block } from '../Base';
import BreadcrumbItem from './BreadcrumbItem';

export default class Breadcrumb extends Block {
  static meta = {
    name: 'Breadcrumb',
    ukClass: 'uk-breadcrumb',
  };

  static propTypes = {
    ...Block.propTypes,
    children: restrictToChildTypes(BreadcrumbItem),
    className: PropTypes.string,
  };

  static Item = BreadcrumbItem;

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
      Breadcrumb.meta.ukClass,
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
