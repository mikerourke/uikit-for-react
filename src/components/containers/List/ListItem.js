import React from 'react';
import PropTypes from 'prop-types';
import { BlockElement } from '../../base/index';

export default class ListItem extends React.Component {
  static displayName = 'ListItem';

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
