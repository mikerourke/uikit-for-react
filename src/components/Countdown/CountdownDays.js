import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
} from '../../lib';

const CountdownDays = ({ as, className }) => {
  const classes = classnames(
    className,
    CountdownDays.meta.ukClass,
    buildClassName('countdown', 'number'),
  );

  const Element = getElementType(CountdownDays, as);
  return (
    <Element className={classes} />
  );
};

CountdownDays.meta = {
  name: 'CountdownDays',
  ukClass: 'uk-countdown-days',
};

CountdownDays.propTypes = {
  as: PropTypes.oneOf(['div', 'span']),
  className: PropTypes.string,
};

CountdownDays.defaultProps = {
  as: 'span',
  className: '',
};

export default CountdownDays;
