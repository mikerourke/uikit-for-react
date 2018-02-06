import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import PaginationItem from './PaginationItem';
import PaginationNext from './PaginationNext';
import PaginationPrevious from './PaginationPrevious';

export default class Pagination extends React.Component {
  static displayName = 'Pagination';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(PaginationItem),
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'ul',
    className: '',
  };

  static Item = PaginationItem;
  static Next = PaginationNext;
  static Previous = PaginationPrevious;

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-pagination');
    const Element = getElementType(Pagination, this.props);
    return <Element {...rest} className={classes} />;
  }
}
