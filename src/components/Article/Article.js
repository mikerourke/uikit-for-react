import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ArticleLead from './ArticleLead';
import ArticleMeta from './ArticleMeta';
import ArticleTitle from './ArticleTitle';

class Article extends React.Component {
  static meta = {
    name: 'Article',
    ukClass: 'uk-article',
  };

  static propTypes = {
    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  static Lead = ArticleLead;

  static Meta = ArticleMeta;

  static Title = ArticleTitle;

  render() {
    const {
      children,
      className,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Article.meta.ukClass,
    );

    return (
      <article
        {...rest}
        className={classes}
      >
        {children}
      </article>
    );
  }
}

export default Article;
