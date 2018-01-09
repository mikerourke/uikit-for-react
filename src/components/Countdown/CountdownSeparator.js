import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getElementType } from '../../lib';

const CountdownSeparator = ({ as, children, className }) => {
  const classes = classnames(
    className,
    CountdownSeparator.meta.ukClass,
  );

  const Element = getElementType(CountdownSeparator, as);
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
  /** HTML element to use for the component. */
  as: PropTypes.oneOf(['div', 'span']),

  /** Separator to display in the element. */
  children: PropTypes.string.isRequired,

  /** Additional classes to apply to element. */
  className: PropTypes.string,
};

CountdownSeparator.defaultProps = {
  as: 'div',
  className: '',
};

export default CountdownSeparator;
