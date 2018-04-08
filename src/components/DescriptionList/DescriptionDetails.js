import React from 'react';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class DescriptionDetails extends React.Component {
  static displayName = 'DescriptionDetails';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('dd'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'dd',
  };

  render() {
    return <Base {...this.props} component={DescriptionDetails} />;
  }
}
