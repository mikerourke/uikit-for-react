import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

const ArticleLead = ({ children, ...rest }) => (
  <Text {...rest} as="p" lead>
    {children}
  </Text>
);

ArticleLead.meta = {
  name: 'ArticleLead',
};

ArticleLead.propTypes = {
  /** Contents to display in the element. */
  children: PropTypes.node.isRequired,

  /** Additional classes to apply to element. */
  className: PropTypes.string,
};

ArticleLead.defaultProps = {
  className: '',
};

export default ArticleLead;
