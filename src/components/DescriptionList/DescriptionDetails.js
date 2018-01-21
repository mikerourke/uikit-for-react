import React from 'react';
import { BlockElement } from '../Base';

export default class DescriptionDetails extends BlockElement {
  static meta = {
    name: 'DescriptionDetails',
  };

  static propTypes = BlockElement.propTypes;

  render() {
    return <BlockElement {...this.props} as="dd" />;
  }
}
