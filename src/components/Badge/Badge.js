import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InlineElement } from '../Base';

const Badge = ({ className, ...rest }) => (
  <InlineElement
    {...rest}
    className={classnames(className, Badge.meta.ukClass)}
  />
);

Badge.propTypes = {
  ...InlineElement.propTypes,
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
