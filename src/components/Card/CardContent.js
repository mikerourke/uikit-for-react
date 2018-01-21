import React from 'react';
import { BlockElement } from '../Base';

export default class CardContent extends BlockElement {
  static meta = {
    name: 'CardContent',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
  };

  static defaultProps = {
    as: 'p',
  };

  render() {
    return <BlockElement {...this.props} />;
  }
}
