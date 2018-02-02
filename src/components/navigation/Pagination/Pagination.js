import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';
import PaginationItem from './PaginationItem';
import PaginationNext from './PaginationNext';
import PaginationPrevious from './PaginationPrevious';

export default class Pagination extends React.Component {
  static displayName = 'Pagination';

  static propTypes = {
    ...BlockElement.propTypes,
    children: customPropTypes.restrictToChildTypes(PaginationItem),
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: '',
  };

  static Item = PaginationItem;
  static Next = PaginationNext;
  static Previous = PaginationPrevious;

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-pagination');
    return <BlockElement {...rest} as="ul" className={classes} />;
  }
}
