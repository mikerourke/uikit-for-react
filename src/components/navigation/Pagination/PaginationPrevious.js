import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class PaginationPrevious extends React.Component {
  static displayName = 'PaginationPrevious';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('span'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'span',
  };

  render() {
    return (
      <Base
        {...this.props}
        component={PaginationPrevious}
        uk-pagination-previous=""
      />
    );
  }
}
