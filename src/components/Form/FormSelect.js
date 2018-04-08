import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, UIK } from '../../lib';
import Base from '../Base';

export default class FormSelect extends React.Component {
  static displayName = 'FormSelect';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('select'),
    blank: PropTypes.bool,
    danger: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'small']),
    success: PropTypes.bool,
    width: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.FORM_WIDTHS),
      Base.propTypes.width,
    ]),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'select',
    blank: false,
    danger: false,
    success: false,
  };

  render() {
    const {
      blank,
      className,
      danger,
      size,
      success,
      width,
      ...rest
    } = this.props;

    const isFormWidth = UIK.FORM_WIDTHS.includes(width);

    const classes = classnames(
      className,
      'uk-select',
      buildClassName('form', size),
      {
        [buildClassName('form-width', width)]: isFormWidth,
        'uk-form-blank': blank,
        'uk-form-danger': danger,
        'uk-form-success': success,
      },
    );

    return (
      <Base
        {...rest}
        className={classes}
        component={FormSelect}
        width={!isFormWidth ? width : undefined}
      />
    );
  }
}
