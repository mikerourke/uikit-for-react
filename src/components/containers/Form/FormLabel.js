import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class FormLabel extends React.Component {
  static displayName = 'FormLabel';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('label'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'label',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-form-label');

    return <Base {...rest} className={classes} component={FormLabel} />;
  }
}
