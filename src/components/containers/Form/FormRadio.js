import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib';
import { InlineElement } from '../../base';

export default class FormRadio extends React.Component {
  static displayName = 'FormRadio';

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

    const classes = classnames(className, 'uk-radio', {
      [buildClassName('form', 'blank')]: blank,
      [buildClassName('form', 'danger')]: danger,
      [buildClassName('form', 'success')]: success,
    });

    return (
      <InlineElement
        {...rest}
        as="input"
        type="radio"
        className={classes || undefined}
      />
    );
  }
}
