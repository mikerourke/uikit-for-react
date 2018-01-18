import React from 'react';
import { Block } from '../Base';

const ArticleBody = props => (
  <Block {...props} />
);

ArticleBody.propTypes = Block.propTypes;

ArticleBody.meta = {
  name: 'ArticleBody',
};

export default ArticleBody;
