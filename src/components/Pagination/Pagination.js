import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { restrictToChildTypes } from '../../lib';
import { Block } from '../Base';
import PaginationItem from './PaginationItem';
import PaginationNext from './PaginationNext';
import PaginationPrevious from './PaginationPrevious';

export default class Pagination extends Block {
  static meta = {
    name: 'Pagination',
    ukClass: 'uk-pagination',
  };

  static propTypes = {
    ...Block.propTypes,
    children: restrictToChildTypes(PaginationItem),
    className: PropTypes.string,
  };

  static Item = PaginationItem;
  static Next = PaginationNext;
  static Previous = PaginationPrevious;

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
      Pagination.meta.ukClass,
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
