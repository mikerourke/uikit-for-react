import React from 'react';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class TableHeader extends React.Component {
  static displayName = 'TableHeader';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('thead'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'thead',
  };

  render() {
    return <Base {...this.props} component={TableHeader} />;
  }
}
