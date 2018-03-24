import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import { buildClassName, customPropTypes, UIK } from '../../../lib';
import Base from '../../base';
import { Icon } from '../../elements';

export default class FormInput extends React.Component {
  static displayName = 'FormInput';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('input'),
    blank: PropTypes.bool,
    danger: PropTypes.bool,
    formWidth: ExtraPropTypes.mutuallyExclusiveProps(
      PropTypes.oneOf(UIK.FORM_WIDTHS),
      'formWidth',
      'width',
    ),
    iconOptions: PropTypes.shape({
      ...Icon.propTypes,
      as: PropTypes.oneOf(['a', 'button', 'span']),
      flip: PropTypes.bool,
    }),
    size: PropTypes.oneOf(['large', 'small']),
    success: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'input',
    blank: false,
    danger: false,
    success: false,
  };

  renderWithIcon(iconOptions, inputElement) {
    const { className, flip, ...rest } = iconOptions;

    const classes = classnames(className, 'uk-form-icon', {
      'uk-form-icon-flip': flip,
    });

    return (
      <div className="uk-inline">
        <Icon {...rest} className={classes} />
        {inputElement}
      </div>
    );
  }

  render() {
    const {
      blank,
      className,
      danger,
      formWidth,
      iconOptions,
      size,
      success,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-input',
      buildClassName('form', size),
      buildClassName('form', 'width', formWidth),
      {
        'uk-form-blank': blank,
        'uk-form-danger': danger,
        'uk-form-success': success,
      },
    );

    const inputElement = (
      <Base {...rest} component={FormInput} className={classes} />
    );

    if (!isNil(iconOptions)) {
      return this.renderWithIcon(iconOptions, inputElement);
    }

    return inputElement;
  }
}
