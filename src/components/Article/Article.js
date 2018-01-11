import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildObjectOrValueClassNames,
  commonPropTypes,
} from '../../lib';
import ArticleBody from './ArticleBody';
import ArticleLead from './ArticleLead';
import ArticleMeta from './ArticleMeta';
import ArticleTitle from './ArticleTitle';

class Article extends React.Component {
  static meta = {
    name: 'Article',
    ukClass: 'uk-article',
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,
  };

  static defaultProps = {
    className: '',
  };

  static Body = ArticleBody;
  static Lead = ArticleLead;
  static Meta = ArticleMeta;
  static Title = ArticleTitle;

  render() {
    const {
      children,
      className,
      margin,
      padding,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Article.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    return (
      <article
        {...rest}
        className={classes || undefined}
      >
        {children}
      </article>
    );
  }
}

export default Article;
