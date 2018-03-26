import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, UIK } from '../../../lib';
import Base from '../../base';

export default class FormSelect extends React.Component {
  static displayName = 'FormSelect';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('select'),
    blank: PropTypes.bool,
    danger: PropTypes.bool,
    formWidth: ExtraPropTypes.mutuallyExclusiveProps(
      PropTypes.oneOf(UIK.FORM_WIDTHS),
      'formWidth',
      'width',
    ),
    size: PropTypes.oneOf(['large', 'small']),
    success: PropTypes.bool,
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
      formWidth,
      size,
      success,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-select',
      buildClassName('form', size),
      buildClassName('form-width', formWidth),
      {
        'uk-form-blank': blank,
        'uk-form-danger': danger,
        'uk-form-success': success,
      },
    );

    return <Base {...rest} className={classes} component={FormSelect} />;
  }
}
