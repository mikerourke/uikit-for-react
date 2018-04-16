import React from 'react';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { childMatchesOneOfTypes, customPropTypes } from '../../lib';
import Base from '../Base';
import PaginationItem from './PaginationItem';
import PaginationNext from './PaginationNext';
import PaginationPrevious from './PaginationPrevious';

export default class Pagination extends React.Component {
  static displayName = 'Pagination';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
    children: ExtraPropTypes.or([
      customPropTypes.restrictToChildTypes(PaginationItem),
      customPropTypes.limitToOneOfChildType(PaginationNext, PaginationPrevious),
    ]),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
  };

  static Item = PaginationItem;
  static Next = PaginationNext;
  static Previous = PaginationPrevious;

  renderChildren = children =>
    React.Children.map(children, child => {
      if (childMatchesOneOfTypes(child, [PaginationNext, PaginationPrevious])) {
        return <PaginationItem>{child}</PaginationItem>;
      }
      return child;
    });

  render() {
    const { children, className, ...rest } = this.props;

    const classes = classnames(className, 'uk-pagination');

    return (
      <Base {...rest} className={classes} component={Pagination}>
        {this.renderChildren(children)}
      </Base>
    );
  }
}
