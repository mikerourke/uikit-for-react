import React from 'react';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class PaginationNext extends React.Component {
  static displayName = 'PaginationNext';

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
      <Base {...this.props} component={PaginationNext} uk-pagination-next="" />
    );
  }
}
