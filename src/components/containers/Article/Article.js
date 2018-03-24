import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';
import ArticleBody from './ArticleBody';
import ArticleLead from './ArticleLead';
import ArticleMeta from './ArticleMeta';
import ArticleTitle from './ArticleTitle';

/**
 * Create articles within your page.
 * @see https://getuikit.com/docs/article
 */
export default class Article extends React.Component {
  static displayName = 'Article';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('article'),
    children: PropTypes.node,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'article',
  };

  static Body = ArticleBody;
  static Lead = ArticleLead;
  static Meta = ArticleMeta;
  static Title = ArticleTitle;

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-article');
    return <Base {...rest} component={Article} className={classes} />;
  }
}
