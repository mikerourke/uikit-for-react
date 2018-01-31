import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { AnyElement } from '../../base';

export default class CountdownSeparator extends React.Component {
  static displayName = 'CountdownSeparator';

  static propTypes = {
    ...AnyElement.propTypes,
    as: PropTypes.oneOfType([
      PropTypes.oneOf(['div', 'span']),
      PropTypes.element,
      PropTypes.func,
    ]),
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...AnyElement.defaultProps,
    as: 'div',
    className: '',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-countdown-separator');
    return <AnyElement {...rest} className={classes} />;
  }
}
