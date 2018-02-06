import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  UIK,
} from '../../../lib';

export default class FormTextArea extends React.Component {
  static displayName = 'FormTextArea';

  static propTypes = {
    as: customPropTypes.customOrStringElement('textarea'),
    blank: PropTypes.bool,
    className: PropTypes.string,
    danger: PropTypes.bool,
    // TODO: Add validation to ensure "width" isn't specified.
    formWidth: PropTypes.oneOf(UIK.FORM_WIDTHS),
    size: PropTypes.oneOf(['large', 'small']),
    success: PropTypes.bool,
  };

  static defaultProps = {
    as: 'textarea',
    blank: false,
    className: '',
    danger: false,
    success: false,
  };

  render() {
    const {
      as,
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
      'uk-textarea',
      buildClassName('form', size),
      buildClassName('form', 'width', formWidth),
      {
        'uk-form-blank': blank,
        'uk-form-danger': danger,
        'uk-form-success': success,
      },
    );

    const Element = getElementType(FormTextArea, as);
    return <Element {...rest} className={classes} />;
  }
}
