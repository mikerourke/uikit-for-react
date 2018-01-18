import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
} from '../../lib';
import CountdownLabel from './CountdownLabel';

const CountdownSeconds = ({ className, label, ...rest }) => {
  const classes = classnames(
    className,
    CountdownSeconds.meta.ukClass,
    buildClassName('countdown', 'number'),
  );

  const Element = getElementType(CountdownSeconds, rest);

  if (!label) return (<Element className={classes} />);
  return (
    <div>
      <Element className={classes} />
      {label}
    </div>
  );
};

CountdownSeconds.meta = {
  name: 'CountdownSeconds',
  ukClass: 'uk-countdown-seconds',
};

CountdownSeconds.propTypes = {
  as: PropTypes.oneOf(['div', 'span']),
  className: PropTypes.string,
  label: PropTypes.instanceOf(CountdownLabel),
};

CountdownSeconds.defaultProps = {
  as: 'span',
  label: null,
};

export default CountdownSeconds;
