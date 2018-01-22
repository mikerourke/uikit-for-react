import React from 'react';
import { BlockElement } from '../Base';

export default class ArticleBody extends BlockElement {
  static displayName = 'ArticleBody';

  static propTypes = BlockElement.propTypes;

  static defaultProps = BlockElement.defaultProps;

  render() {
    return <BlockElement {...this.props} />;
  }
}
