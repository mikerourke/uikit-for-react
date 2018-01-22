import React from 'react';
import { BlockElement } from '../Base';

export default class DescriptionDetails extends BlockElement {
  static displayName = 'DescriptionDetails';

  static propTypes = BlockElement.propTypes;

  static defaultProps = BlockElement.defaultProps;

  render() {
    return <BlockElement {...this.props} as="dd" />;
  }
}
