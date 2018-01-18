import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Inline } from '../Base';

const Badge = ({ className, ...rest }) => (
  <Inline
    {...rest}
    className={classnames(className, Badge.meta.ukClass)}
  />
);

Badge.propTypes = {
  ...Inline.propTypes,
  as: PropTypes.oneOf(['a', 'span']),
};

Badge.defaultProps = {
  as: 'span',
};

Badge.meta = {
  name: 'Badge',
  ukClass: 'uk-badge',
};

export default Badge;
