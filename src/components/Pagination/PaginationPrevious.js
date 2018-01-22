import React from 'react';
import { InlineElement } from '../Base';

export default class PaginationPrevious extends InlineElement {
  static displayName = 'PaginationPrevious';

  static propTypes = InlineElement.propTypes;

  static defaultProps = InlineElement.defaultProps;

  render() {
    return (
      <InlineElement {...this.props} as="span" data-uk-pagination-previous />
    );
  }
}
