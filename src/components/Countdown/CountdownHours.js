import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
} from '../../lib';
import CountdownLabel from './CountdownLabel';

const CountdownHours = ({ className, label, ...rest }) => {
  const classes = classnames(
    className,
    CountdownHours.meta.ukClass,
    buildClassName('countdown', 'number'),
  );

  const Element = getElementType(CountdownHours, rest);

  if (!label) return (<Element className={classes} />);
  return (
    <div>
      <Element className={classes} />
      {label}
    </div>
  );
};

CountdownHours.meta = {
  name: 'CountdownHours',
  ukClass: 'uk-countdown-hours',
};

CountdownHours.propTypes = {
  as: PropTypes.oneOf(['div', 'span']),
  className: PropTypes.string,
  label: PropTypes.instanceOf(CountdownLabel),
};

CountdownHours.defaultProps = {
  as: 'span',
  label: null,
};

export default CountdownHours;
