import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class Label extends React.Component {
  static displayName = 'Label';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('span'),
    children: PropTypes.node,
    danger: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'span',
    danger: false,
    success: false,
    warning: false,
  };

  render() {
    const { className, danger, success, warning, ...rest } = this.props;

    const classes = classnames(className, 'uk-label', {
      'uk-label-danger': danger,
      'uk-label-success': success,
      'uk-label-warning': warning,
    });

    return <Base {...rest} className={classes} component={Label} />;
  }
}
