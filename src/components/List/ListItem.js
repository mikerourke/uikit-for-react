import React from 'react';
import { BlockElement } from '../Base';

export default class ListItem extends BlockElement {
  static meta = {
    name: 'ListItem',
  };

  static propTypes = BlockElement.propTypes;

  render() {
    return <BlockElement {...this.props} as="li" />;
  }
}
