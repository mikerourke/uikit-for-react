import React from 'react';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class DescriptionTerm extends React.Component {
  static displayName = 'DescriptionTerm';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('dt'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'dt',
  };

  render() {
    return <Base {...this.props} component={DescriptionTerm} />;
  }
}
