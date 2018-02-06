import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';

export default class FormRadio extends React.Component {
  static displayName = 'FormRadio';

  static propTypes = {
    as: customPropTypes.customOrStringElement('input'),
    blank: PropTypes.bool,
    className: PropTypes.string,
    danger: PropTypes.bool,
    success: PropTypes.bool,
  };

  static defaultProps = {
    as: 'input',
    blank: false,
    className: '',
    danger: false,
    success: false,
  };

  render() {
    const { as, blank, className, danger, success, ...rest } = this.props;

    const classes = classnames(className, 'uk-radio', {
      'uk-form-blank': blank,
      'uk-form-danger': danger,
      'uk-form-success': success,
    },);

    const Element = getElementType(FormRadio, as);
    return <Element {...rest} type="radio" className={classes} />;
  }
}
