import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import invoke from 'lodash/invoke';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class FormRange extends React.Component {
  static displayName = 'FormRange';

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

  handleChange = e => {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }
    invoke(this.props, 'onChange', e, this.props);
  };

  render() {
    const { blank, className, danger, success, ...rest } = this.props;

    const classes = classnames(className, 'uk-range', {
      'uk-form-blank': blank,
      'uk-form-danger': danger,
      'uk-form-success': success,
    });

    return (
      <Base
        {...rest}
        type="range"
        className={classes}
        onChange={this.handleChange}
        component={FormRange}
      />
    );
  }
}
