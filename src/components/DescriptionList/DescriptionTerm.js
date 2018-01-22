import React from 'react';
import { BlockElement } from '../Base';

export default class DescriptionTerm extends BlockElement {
  static displayName = 'DescriptionTerm';

  static propTypes = BlockElement.propTypes;

  static defaultProps = BlockElement.defaultProps;

  render() {
    return <BlockElement {...this.props} as="dt" />;
  }
}
