import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { AnyElement } from '../Base';

export default class CountdownSeparator extends AnyElement {
  static meta = {
    name: 'CountdownSeparator',
    ukClass: 'uk-countdown-separator',
  };

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
    as: 'div',
  };

  render() {
    const { className, children, ...rest } = this.props;

    const classes = classnames(className, CountdownSeparator.meta.ukClass);

    return (
      <AnyElement {...rest} className={classes || undefined}>
        {children}
      </AnyElement>
    );
  }
}
