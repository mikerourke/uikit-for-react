import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class FormRadio extends React.Component {
  static displayName = 'FormRadio';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('input'),
    blank: PropTypes.bool,
    danger: PropTypes.bool,
    success: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'input',
    blank: false,
    danger: false,
    success: false,
  };

  render() {
    const { blank, className, danger, success, ...rest } = this.props;

    const classes = classnames(className, 'uk-radio', {
      'uk-form-blank': blank,
      'uk-form-danger': danger,
      'uk-form-success': success,
    });

    return (
      <Base {...rest} type="radio" component={FormRadio} className={classes} />
    );
  }
}
