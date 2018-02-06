import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';

export default class Label extends React.Component {
  static displayName = 'Label';

  static propTypes = {
    as: customPropTypes.customOrStringElement('span'),
    children: PropTypes.node,
    className: PropTypes.string,
    danger: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
  };

  static defaultProps = {
    as: 'span',
    className: '',
    danger: false,
    success: false,
    warning: false,
  };

  render() {
    const { className, danger, success, warning, ...rest } = this.props;

    const ukClass = 'uk-label';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'danger')]: danger,
      [buildClassName(ukClass, 'success')]: success,
      [buildClassName(ukClass, 'warning')]: warning,
    });

    const Element = getElementType(Label, this.props);
    return <Element {...rest} className={classes} />;
  }
}
