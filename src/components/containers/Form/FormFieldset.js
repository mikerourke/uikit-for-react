import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class FormFieldset extends React.Component {
  static displayName = 'FormFieldset';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('fieldset'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'fieldset',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-form-fieldset');
    return <Base {...rest} className={classes} component={FormFieldset} />;
  }
}
