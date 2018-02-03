import React from 'react';
import PropTypes from 'prop-types';
import { BlockElement } from '../../base';

/**
 * Contents/body of the Article.
 * @see https://getuikit.com/docs/article
 */
export default class ArticleBody extends React.Component {
  static displayName = 'ArticleBody';

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'p',
    className: '',
  };

  render() {
    return <BlockElement {...this.props} />;
  }
}
