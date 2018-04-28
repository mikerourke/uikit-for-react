import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes } from '../../lib';
import Base from '../Base';
import PaginationItem from './PaginationItem';

export default class PaginationPrevious extends React.Component {
  static displayName = 'PaginationPrevious';

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
    const previousElement = (
      <Base
        {...rest}
        component={PaginationPrevious}
        uk-pagination-previous=""
      />
    );

    if (item === true) {
      return <PaginationItem>{previousElement}</PaginationItem>;
    }
    return previousElement;
  }
}
