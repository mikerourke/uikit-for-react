import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
} from '../../lib';

const CountdownSeconds = ({ as, className }) => {
  const classes = classnames(
    className,
    CountdownSeconds.meta.ukClass,
    buildClassName('countdown', 'number'),
  );

  const Element = getElementType(CountdownSeconds, as);
  return (
    <Element className={classes} />
  );
};

CountdownSeconds.meta = {
  name: 'CountdownSeconds',
  ukClass: 'uk-countdown-seconds',
};

CountdownSeconds.propTypes = {
  /** HTML element to use for the component. */
  as: PropTypes.oneOf(['div', 'span']),

  /** Additional classes to apply to element. */
  className: PropTypes.string,
};

CountdownSeconds.defaultProps = {
  as: 'span',
  className: '',
};

export default CountdownSeconds;
