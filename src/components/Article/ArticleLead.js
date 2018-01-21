import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

export default class ArticleLead extends React.Component {
  static meta = {
    name: 'ArticleLead',
  };

  static propTypes = {
    ...Text.propTypes,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;
    return (
      <Text {...rest} as="p" lead>
        {children}
      </Text>
    );
  }
}
