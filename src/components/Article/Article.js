import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ArticleLead from './ArticleLead';
import ArticleMeta from './ArticleMeta';
import ArticleTitle from './ArticleTitle';
import { buildObjectOrValueClassNames, commonPropTypes } from '../../lib';

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

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,
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
        className={classes}
      >
        {children}
      </article>
    );
  }
}

export default Article;
