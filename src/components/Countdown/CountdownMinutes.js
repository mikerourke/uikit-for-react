import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
} from '../../lib';

const CountdownMinutes = ({ as, className }) => {
  const classes = classnames(
    className,
    CountdownMinutes.meta.ukClass,
    buildClassName('countdown', 'number'),
  );

  const Element = getElementType(CountdownMinutes, as);
  return (
    <Element className={classes} />
  );
};

CountdownMinutes.meta = {
  name: 'CountdownMinutes',
  ukClass: 'uk-countdown-minutes',
};

CountdownMinutes.propTypes = {
  /** HTML element to use for the component. */
  as: PropTypes.oneOf(['div', 'span']),

  /** Additional classes to apply to element. */
  className: PropTypes.string,
};

CountdownMinutes.defaultProps = {
  as: 'span',
  className: '',
};

export default CountdownMinutes;
