import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { HTML } from '../../lib';
import { BlockElement } from '../Base';

const ArticleTitle = ({ className, ...rest }) => (
  <BlockElement
    {...rest}
    className={classnames(className, ArticleTitle.meta.ukClass)}
  />
);

ArticleTitle.propTypes = {
  ...BlockElement.propTypes,
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
