import React from 'react';
import { BlockElement } from '../Base';

export default class ListItem extends BlockElement {
  static displayName = 'ListItem';

  static propTypes = BlockElement.propTypes;

  static defaultProps = BlockElement.defaultProps;

  render() {
    return <BlockElement {...this.props} as="li" />;
  }
}
