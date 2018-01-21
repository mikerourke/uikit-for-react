import React from 'react';
import { BlockElement } from '../Base';

export default class ArticleBody extends BlockElement {
  static meta = {
    name: 'ArticleBody',
  };

  static propTypes = BlockElement.propTypes;

  render() {
    return <BlockElement {...this.props} />;
  }
}
