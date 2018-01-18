import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getElementType } from '../../lib';

const CountdownSeparator = ({ children, className, ...rest }) => {
  const classes = classnames(
    className,
    CountdownSeparator.meta.ukClass,
  );

  const Element = getElementType(CountdownSeparator, rest);
  return (
    <Element className={classes || undefined}>
      {children}
    </Element>
  );
};

CountdownSeparator.meta = {
  name: 'CountdownSeparator',
  ukClass: 'uk-countdown-separator',
};

CountdownSeparator.propTypes = {
  as: PropTypes.oneOf(['div', 'span']),
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

CountdownSeparator.defaultProps = {
  as: 'div',
};

export default CountdownSeparator;
