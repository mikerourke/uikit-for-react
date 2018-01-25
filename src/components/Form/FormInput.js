import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, UIK } from '../../lib';
import { InlineElement } from '../Base';

export default class FormInput extends React.Component {
  static displayName = 'FormInput';

  static propTypes = {
    ...InlineElement.propTypes,
    blank: PropTypes.bool,
    className: PropTypes.string,
    danger: PropTypes.bool,
    // TODO: Add validation to ensure "width" isn't specified.
    formWidth: PropTypes.oneOf(UIK.FORM_WIDTHS),
    size: PropTypes.oneOf(['large', 'small']),
    success: PropTypes.bool,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    blank: false,
    className: null,
    danger: false,
    formWidth: null,
    size: null,
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
      'uk-input',
      buildClassName('form', size),
      buildClassName('form', 'width', formWidth),
      {
        [buildClassName('form', 'blank')]: blank,
        [buildClassName('form', 'danger')]: danger,
        [buildClassName('form', 'success')]: success,
      },
    );

    return (
      <InlineElement {...rest} as="input" className={classes || undefined} />
    );
  }
}
