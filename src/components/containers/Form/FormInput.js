import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import { buildClassName, UIK } from '../../../lib';
import { InlineElement } from '../../base';
import Icon from '../../elements/Icon';

export default class FormInput extends React.Component {
  static displayName = 'FormInput';

  static propTypes = {
    ...InlineElement.propTypes,
    blank: PropTypes.bool,
    className: PropTypes.string,
    danger: PropTypes.bool,
    // TODO: Add validation to ensure "width" isn't specified.
    formWidth: PropTypes.oneOf(UIK.FORM_WIDTHS),
    iconOptions: PropTypes.shape({
      ...Icon.propTypes,
      as: PropTypes.oneOf(['a', 'button', 'span']),
      flip: PropTypes.bool,
    }),
    size: PropTypes.oneOf(['large', 'small']),
    success: PropTypes.bool,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    blank: false,
    className: '',
    danger: false,
    formWidth: null,
    iconOptions: null,
    size: null,
    success: false,
  };

  renderWithIcon(iconOptions, inputElement) {
    const { className, flip, ...rest } = iconOptions;

    const ukClass = 'uk-form-icon';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'flip')]: flip,
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
        [buildClassName('form', 'blank')]: blank,
        [buildClassName('form', 'danger')]: danger,
        [buildClassName('form', 'success')]: success,
      },
    );

    const inputElement = (
      <InlineElement {...rest} as="input" className={classes} />
    );

    if (!isNil(iconOptions)) {
      return this.renderWithIcon(iconOptions, inputElement);
    }

    return inputElement;
  }
}
