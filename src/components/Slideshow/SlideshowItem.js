import React from 'react';
import PropTypes from 'prop-types';
import { BlockElement } from '../Base';

export default class SlideshowItem extends BlockElement {
  static displayName = 'SlideshowItem';

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
    return <BlockElement {...this.props} as="li" />;
  }
}
