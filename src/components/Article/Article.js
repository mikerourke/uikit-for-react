import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';
import ArticleBody from './ArticleBody';
import ArticleLead from './ArticleLead';
import ArticleMeta from './ArticleMeta';
import ArticleTitle from './ArticleTitle';

/**
 * Create articles within your page.
 * @see https://getuikit.com/docs/article
 */
export default class Article extends BlockElement {
  static meta = {
    name: 'Article',
    ukClass: 'uk-article',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static Body = ArticleBody;
  static Lead = ArticleLead;
  static Meta = ArticleMeta;
  static Title = ArticleTitle;

  handleRef = element => (this.ref = element);

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const { children, className, ...rest } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      Article.meta.ukClass,
    );

    return (
      <article
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {children}
      </article>
    );
  }
}
