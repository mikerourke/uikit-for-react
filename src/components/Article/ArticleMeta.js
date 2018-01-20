import React from 'react';
import classnames from 'classnames';
import { BlockElement } from '../Base';

const ArticleMeta = ({ className, ...rest }) => (
  <BlockElement
    {...rest}
    as="p"
    className={classnames(className, ArticleMeta.meta.ukClass)}
  />
);

ArticleMeta.propTypes = BlockElement.propTypes;

ArticleMeta.meta = {
  name: 'ArticleMeta',
  ukClass: 'uk-article-meta',
};

export default ArticleMeta;
