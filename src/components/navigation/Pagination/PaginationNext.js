import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class PaginationNext extends React.Component {
  static displayName = 'PaginationNext';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('span'),
    children: PropTypes.node,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'span',
  };

  render() {
    return (
      <Base
        {...this.props}
        component={PaginationNext}
        data-uk-pagination-next=""
      />
    );
  }
}
