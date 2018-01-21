import React from 'react';
import { BlockElement } from '../Base';

export default class DescriptionTerm extends BlockElement {
  static meta = {
    name: 'DescriptionTerm',
  };

  static propTypes = BlockElement.propTypes;

  render() {
    return <BlockElement {...this.props} as="dt" />;
  }
}
