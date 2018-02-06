import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';

export default class FormRange extends React.Component {
  static displayName = 'FormRange';

  static propTypes = {
    as: customPropTypes.customOrStringElement('input'),
    blank: PropTypes.bool,
    className: PropTypes.string,
    danger: PropTypes.bool,
    success: PropTypes.bool,
  };

  static defaultProps = {
    as: 'input',
    blank: false,
    className: '',
    danger: false,
    success: false,
  };

  render() {
    const { as, blank, className, danger, success, ...rest } = this.props;

    const classes = classnames(className, 'uk-range', {
      [buildClassName('form', 'blank')]: blank,
      [buildClassName('form', 'danger')]: danger,
      [buildClassName('form', 'success')]: success,
    });

    const Element = getElementType(FormRange, this.props);
    return <Element {...rest} type="range" className={classes} />;
  }
}
