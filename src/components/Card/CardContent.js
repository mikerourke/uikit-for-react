import React from 'react';
import PropTypes from 'prop-types';
import { BlockElement } from '../Base';

export default class CardContent extends BlockElement {
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
