import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';
import PaginationItem from './PaginationItem';
import PaginationNext from './PaginationNext';
import PaginationPrevious from './PaginationPrevious';

export default class Pagination extends React.Component {
  static displayName = 'Pagination';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(PaginationItem),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
  };

  static Item = PaginationItem;
  static Next = PaginationNext;
  static Previous = PaginationPrevious;

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-pagination');
    return <Base {...rest} className={classes} component={Pagination} />;
  }
}
