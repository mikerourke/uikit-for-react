import React from 'react';
import { BlockElement } from '../Base';

const ArticleBody = props => <BlockElement {...props} />;

ArticleBody.propTypes = BlockElement.propTypes;

ArticleBody.meta = {
  name: 'ArticleBody',
};

export default ArticleBody;
