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
  as: PropTypes.oneOf(['div', 'span']),
  className: PropTypes.string,
};

CountdownSeconds.defaultProps = {
  as: 'span',
  className: '',
};

export default CountdownSeconds;
