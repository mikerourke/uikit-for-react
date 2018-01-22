import React from 'react';
import { BlockElement } from '../Base';

export default class CardContent extends BlockElement {
  static displayName = 'CardContent';

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'p',
  };

  render() {
    return <BlockElement {...this.props} />;
  }
}
