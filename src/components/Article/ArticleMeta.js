import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

export default class ArticleMeta extends BlockElement {
  static meta = {
    name: 'ArticleMeta',
    ukClass: 'uk-article-meta',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    className: PropTypes.string,
  };

  render() {
    const { className, ...rest } = this.props;

    return (
      <BlockElement
        {...rest}
        as="p"
        className={classnames(className, ArticleMeta.meta.ukClass)}
      />
    );
  }
}
