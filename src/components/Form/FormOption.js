import React from 'react';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class FormOption extends React.Component {
  static displayName = 'FormOption';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('option'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'option',
  };

  render() {
    return <Base {...this.props} component={FormOption} />;
  }
}
