import React from 'react';
import PropTypes from 'prop-types';
import { BlockElement } from '../../base/index';

export default class CardContent extends React.Component {
  static displayName = 'CardContent';

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'p',
    className: null,
  };

  render() {
    return <BlockElement {...this.props} />;
  }
}
