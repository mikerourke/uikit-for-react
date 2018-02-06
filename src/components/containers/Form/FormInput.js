import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  UIK,
} from '../../../lib';
import { Flex, Margin, Width } from '../../common';
import { Icon } from '../../elements';

export default class FormInput extends React.Component {
  static displayName = 'FormInput';

  static propTypes = {
    as: customPropTypes.customOrStringElement('input'),
    blank: PropTypes.bool,
    className: PropTypes.string,
    danger: PropTypes.bool,
    flex: Flex.propTypes,
    // TODO: Add validation to ensure "width" isn't specified.
    formWidth: PropTypes.oneOf(UIK.FORM_WIDTHS),
    iconOptions: PropTypes.shape({
      ...Icon.propTypes,
      as: PropTypes.oneOf(['a', 'button', 'span']),
      flip: PropTypes.bool,
    }),
    margin: Margin.propTypes,
    size: PropTypes.oneOf(['large', 'small']),
    success: PropTypes.bool,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'input',
    blank: false,
    className: '',
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
      as,
      blank,
      className,
      danger,
      flex,
      formWidth,
      iconOptions,
      margin,
      size,
      success,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-input',
      buildClassName('form', size),
      buildClassName('form', 'width', formWidth),
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-form-blank': blank,
        'uk-form-danger': danger,
        'uk-form-success': success,
      },
    );

    const Element = getElementType(FormInput, as);
    const inputElement = <Element {...rest} className={classes} />;

    if (!isNil(iconOptions)) {
      return this.renderWithIcon(iconOptions, inputElement);
    }

    return inputElement;
  }
}
