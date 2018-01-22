import React from 'react';
import { InlineElement } from '../Base';

export default class PaginationNext extends InlineElement {
  static displayName = 'PaginationNext';

  static propTypes = InlineElement.propTypes;

  static defaultProps = InlineElement.defaultProps;

  render() {
    return <InlineElement {...this.props} as="span" data-uk-pagination-next />;
  }
}
