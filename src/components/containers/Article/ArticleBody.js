import React from 'react';
import { customPropTypes, HTML } from '../../../lib';
import Base from '../../base';

/**
 * Contents/body of the Article.
 * @see https://getuikit.com/docs/article
 */
export default class ArticleBody extends React.Component {
  static displayName = 'ArticleBody';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'p',
  };

  render() {
    return <Base {...this.props} component={ArticleBody} />;
  }
}
