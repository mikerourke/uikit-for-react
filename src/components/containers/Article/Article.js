import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';
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
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringChild('article'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'article',
    className: '',
  };

  static Body = ArticleBody;
  static Lead = ArticleLead;
  static Meta = ArticleMeta;
  static Title = ArticleTitle;

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-article');
    return <BlockElement {...rest} className={classes} />;
  }
}
