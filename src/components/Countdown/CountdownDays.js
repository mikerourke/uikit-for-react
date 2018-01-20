import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, getElementType } from '../../lib';
import CountdownLabel from './CountdownLabel';

const CountdownDays = ({ className, label, ...rest }) => {
  const classes = classnames(
    className,
    CountdownDays.meta.ukClass,
    buildClassName('countdown', 'number'),
  );

  const Element = getElementType(CountdownDays, rest);

  if (!label) return <Element className={classes} />;
  return (
    <div>
      <Element className={classes} />
      {label}
    </div>
  );
};

CountdownDays.meta = {
  name: 'CountdownDays',
  ukClass: 'uk-countdown-days',
};

CountdownDays.propTypes = {
  as: PropTypes.oneOf(['div', 'span']),
  className: PropTypes.string,
  label: PropTypes.instanceOf(CountdownLabel),
};

CountdownDays.defaultProps = {
  as: 'span',
  label: null,
};

export default CountdownDays;
