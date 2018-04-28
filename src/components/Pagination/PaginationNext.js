import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes } from '../../lib';
import Base from '../Base';
import PaginationItem from './PaginationItem';

export default class PaginationNext extends React.Component {
  static displayName = 'PaginationNext';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('span'),
    item: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'span',
      item: false,
  };

  render() {
    const { item, ...rest } = this.props;
    const nextElement = (
      <Base {...rest} component={PaginationNext} uk-pagination-next="" />
    );

    if (item === true) {
      return <PaginationItem>{nextElement}</PaginationItem>;
    }
    return nextElement;
  }
}
