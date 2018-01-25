import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { InlineElement } from '../Base';

export default class FormCheckbox extends React.Component {
  static displayName = 'FormCheckbox';

  static propTypes = {
    ...InlineElement.propTypes,
    blank: PropTypes.bool,
    className: PropTypes.string,
    danger: PropTypes.bool,
    success: PropTypes.bool,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    blank: false,
    className: null,
    danger: false,
    success: false,
  };

  render() {
    const { blank, className, danger, success, ...rest } = this.props;

    const classes = classnames(className, 'uk-checkbox', {
      [buildClassName('form', 'blank')]: blank,
      [buildClassName('form', 'danger')]: danger,
      [buildClassName('form', 'success')]: success,
    });

    return (
      <InlineElement
        {...rest}
        as="input"
        type="checkbox"
        className={classes || undefined}
      />
    );
  }
}
