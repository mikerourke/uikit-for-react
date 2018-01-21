import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { HTML } from '../../lib';
import { BlockElement } from '../Base';

export default class ArticleTitle extends BlockElement {
  static meta = {
    name: 'ArticleTitle',
    ukClass: 'uk-article-title',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOf(HTML.HEADING_ELEMENTS),
  };

  static defaultProps = {
    as: 'h1',
  };

  render() {
    const { className, ...rest } = this.props;

    return (
      <BlockElement
        {...rest}
        className={classnames(className, ArticleTitle.meta.ukClass)}
      />
    );
  }
}
