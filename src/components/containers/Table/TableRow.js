import React from 'react';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class TableRow extends React.Component {
  static displayName = 'TableRow';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('tr'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'tr',
  };

  render() {
    return <Base {...this.props} component={TableRow} />;
  }
}
