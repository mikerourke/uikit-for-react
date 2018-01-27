import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib';
import { InlineElement } from '../../base';

export default class Label extends React.Component {
  static displayName = 'Label';

  static propTypes = {
    ...InlineElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    danger: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    className: null,
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

    return (
      <InlineElement {...rest} as="span" className={classes} />
    );
  }
}
