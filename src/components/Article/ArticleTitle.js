import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { HTML } from '../../lib';
import { Block } from '../Base';

const ArticleTitle = ({ className, ...rest }) => (
  <Block
    {...rest}
    className={classnames(className, ArticleTitle.meta.ukClass)}
  />
);

ArticleTitle.propTypes = {
  ...Block.propTypes,
  as: PropTypes.oneOf(HTML.HEADING_ELEMENTS),
};

ArticleTitle.defaultProps = {
  as: 'h1',
};

ArticleTitle.meta = {
  name: 'ArticleTitle',
  ukClass: 'uk-article-title',
};

export default ArticleTitle;
