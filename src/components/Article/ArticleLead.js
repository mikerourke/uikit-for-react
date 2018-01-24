import React from 'react';
import Text from '../Text';

export default class ArticleLead extends React.Component {
  static displayName = 'ArticleLead';

  static propTypes = Text.propTypes;

  static defaultProps = Text.defaultProps;

  render() {
    return <Text {...this.props} as="p" lead />;
  }
}
