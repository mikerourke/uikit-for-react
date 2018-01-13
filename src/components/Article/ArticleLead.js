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
  ...Text.propTypes,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ArticleLead.defaultProps = {
  className: '',
};

export default ArticleLead;
