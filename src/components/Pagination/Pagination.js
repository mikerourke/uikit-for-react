import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { restrictToChildTypes } from '../../lib';
import { BlockElement } from '../Base';
import PaginationItem from './PaginationItem';
import PaginationNext from './PaginationNext';
import PaginationPrevious from './PaginationPrevious';

export default class Pagination extends BlockElement {
  static meta = {
    name: 'Pagination',
    ukClass: 'uk-pagination',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    children: restrictToChildTypes(PaginationItem),
    className: PropTypes.string,
  };

  static Item = PaginationItem;
  static Next = PaginationNext;
  static Previous = PaginationPrevious;

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
      Pagination.meta.ukClass,
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
