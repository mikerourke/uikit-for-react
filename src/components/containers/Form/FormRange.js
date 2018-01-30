import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib';
import { InlineElement } from '../../base';

export default class FormRange extends React.Component {
  static displayName = 'FormRange';

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
    className: '',
    danger: false,
    success: false,
  };

  render() {
    const { blank, className, danger, success, ...rest } = this.props;

    const classes = classnames(className, 'uk-range', {
      [buildClassName('form', 'blank')]: blank,
      [buildClassName('form', 'danger')]: danger,
      [buildClassName('form', 'success')]: success,
    });

    return (
      <InlineElement
        {...rest}
        as="input"
        type="range"
        className={classes}
      />
    );
  }
}
