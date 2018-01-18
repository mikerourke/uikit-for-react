import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Block } from '../Base';
import ArticleBody from './ArticleBody';
import ArticleLead from './ArticleLead';
import ArticleMeta from './ArticleMeta';
import ArticleTitle from './ArticleTitle';

export default class Article extends Block {
  static meta = {
    name: 'Article',
    ukClass: 'uk-article',
  };

  static propTypes = {
    ...Block.propTypes,
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
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      children,
      className,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      Article.meta.ukClass,
    );

    return (
      <article
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        style={blockStyle}
        {...attributes}
      >
        {children}
      </article>
    );
  }
}
