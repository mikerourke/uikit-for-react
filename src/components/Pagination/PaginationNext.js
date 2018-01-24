import React from 'react';
import PropTypes from 'prop-types';
import { BlockElement, InlineElement } from '../Base';

export default class PaginationNext extends React.Component {
  static displayName = 'PaginationNext';

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
  };

  render() {
    return <InlineElement {...this.props} as="span" data-uk-pagination-next />;
  }
}
