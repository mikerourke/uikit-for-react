import React from 'react';
import PropTypes from 'prop-types';
import { BlockElement } from '../../base';

export default class ArticleBody extends React.Component {
  static displayName = 'ArticleBody';

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: null,
  };

  render() {
    return <BlockElement {...this.props} />;
  }
}
