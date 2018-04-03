import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import invoke from 'lodash/invoke';
import isNil from 'lodash/isNil';
import { buildClassName, customPropTypes, HTML, UIK } from '../../../lib';
import Base from '../../base';
import { Icon } from '../../elements';

export default class FormInput extends React.Component {
  static displayName = 'FormInput';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('input'),
    blank: PropTypes.bool,
    danger: PropTypes.bool,
    iconOptions: PropTypes.shape({
      ...Icon.propTypes,
      as: PropTypes.oneOf(['a', 'button', 'span']),
      flip: PropTypes.bool,
    }),
    size: PropTypes.oneOf(['large', 'small']),
    success: PropTypes.bool,
    type: PropTypes.oneOf(HTML.INPUT_TYPES),
    width: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.FORM_WIDTHS),
      Base.propTypes.width,
    ]),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'input',
    blank: false,
    danger: false,
    success: false,
    type: 'text',
  };

  handleChange = e => {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }
    invoke(this.props, 'onChange', e, this.props);
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
      iconOptions,
      size,
      success,
      width,
      ...rest
    } = this.props;

    const isFormWidth = UIK.FORM_WIDTHS.includes(width);

    const classes = classnames(
      className,
      'uk-input',
      buildClassName('form', size),
      {
        [buildClassName('form-width', width)]: isFormWidth,
        'uk-form-blank': blank,
        'uk-form-danger': danger,
        'uk-form-success': success,
      },
    );

    const InputElement = (
      <Base
        {...rest}
        className={classes}
        component={FormInput}
        width={!isFormWidth ? width : undefined}
        onChange={this.handleChange}
      />
    );

    if (!isNil(iconOptions)) {
      return this.renderWithIcon(iconOptions, InputElement);
    }

    return InputElement;
  }
}
