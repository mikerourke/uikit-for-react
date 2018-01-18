import React from 'react';
import classnames from 'classnames';
import { Block } from '../Base';

const ArticleMeta = ({ className, ...rest }) => (
  <Block
    {...rest}
    as="p"
    className={classnames(className, ArticleMeta.meta.ukClass)}
  />
);

ArticleMeta.propTypes = Block.propTypes;

ArticleMeta.meta = {
  name: 'ArticleMeta',
  ukClass: 'uk-article-meta',
};

export default ArticleMeta;
