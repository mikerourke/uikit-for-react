import React from 'react';
import PropTypes from 'prop-types';
import { BlockElement } from '../../base';

export default class SlideshowItem extends React.Component {
  static displayName = 'SlideshowItem';

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: '',
  };

  render() {
    return <BlockElement {...this.props} as="li" />;
  }
}
