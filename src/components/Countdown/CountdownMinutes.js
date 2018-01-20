import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, getElementType } from '../../lib';
import CountdownLabel from './CountdownLabel';

const CountdownMinutes = ({ className, label, ...rest }) => {
  const classes = classnames(
    className,
    CountdownMinutes.meta.ukClass,
    buildClassName('countdown', 'number'),
  );

  const Element = getElementType(CountdownMinutes, rest);

  if (!label) return <Element className={classes} />;
  return (
    <div>
      <Element className={classes} />
      {label}
    </div>
  );
};

CountdownMinutes.meta = {
  name: 'CountdownMinutes',
  ukClass: 'uk-countdown-minutes',
};

CountdownMinutes.propTypes = {
  as: PropTypes.oneOf(['div', 'span']),
  className: PropTypes.string,
  label: PropTypes.instanceOf(CountdownLabel),
};

CountdownMinutes.defaultProps = {
  as: 'span',
  label: null,
};

export default CountdownMinutes;
