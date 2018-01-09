import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
} from '../../lib';

const CountdownHours = ({ as, className }) => {
  const classes = classnames(
    className,
    CountdownHours.meta.ukClass,
    buildClassName('countdown', 'number'),
  );

  const Element = getElementType(CountdownHours, as);
  return (
    <Element className={classes} />
  );
};

CountdownHours.meta = {
  name: 'CountdownHours',
  ukClass: 'uk-countdown-hours',
};

CountdownHours.propTypes = {
  /** HTML element to use for the component. */
  as: PropTypes.oneOf(['div', 'span']),

  /** Additional classes to apply to element. */
  className: PropTypes.string,
};

CountdownHours.defaultProps = {
  as: 'span',
  className: '',
};

export default CountdownHours;
