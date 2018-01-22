import React from 'react';
import { BlockElement } from '../Base';

export default class ModalContent extends BlockElement {
  static displayName = 'ModalContent';

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
  };

  render() {
    return <BlockElement {...this.props} />;
  }
}
