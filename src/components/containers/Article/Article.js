import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Width } from '../../common';
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
    as: customPropTypes.customOrStringElement('article'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'article',
    className: '',
  };

  static Body = ArticleBody;
  static Lead = ArticleLead;
  static Meta = ArticleMeta;
  static Title = ArticleTitle;

  render() {
    const { as, className, flex, inverse, margin, width, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-article',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(Article, as);
    return <Element {...rest} className={classes} />;
  }
}
