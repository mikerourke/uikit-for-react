import React from 'react';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class UploadFileSelect extends React.Component {
  static displayName = 'UploadFileSelect';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base {...rest} component={UploadFileSelect} uk-form-custom="">
        <input type="file" />
        {children}
      </Base>
    );
  }
}
