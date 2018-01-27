import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { restrictToChildTypes } from '../../../lib/index';
import { BlockElement } from '../../base/index';
import PaginationItem from './PaginationItem';
import PaginationNext from './PaginationNext';
import PaginationPrevious from './PaginationPrevious';

export default class Pagination extends React.Component {
  static displayName = 'Pagination';

  static propTypes = {
    ...BlockElement.propTypes,
    children: restrictToChildTypes(PaginationItem),
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
  };

  static Item = PaginationItem;
  static Next = PaginationNext;
  static Previous = PaginationPrevious;

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-pagination');
    return <BlockElement {...rest} as="ul" className={classes || undefined} />;
  }
}
