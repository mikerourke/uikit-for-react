import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

export default class ArticleLead extends React.Component {
  static displayName = 'ArticleLead';

  static propTypes = {
    ...Text.propTypes,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    ...Text.defaultProps,
    children: null,
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
