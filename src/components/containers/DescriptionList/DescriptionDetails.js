import React from 'react';
import PropTypes from 'prop-types';
import { BlockElement } from '../../base';

export default class DescriptionDetails extends React.Component {
  static displayName = 'DescriptionDetails';

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
    return <BlockElement {...this.props} as="dd" />;
  }
}
