import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { HTML } from '../../lib';
import { BlockElement } from '../Base';

const CommentTitle = ({ className, ...rest }) => (
  <BlockElement
    {...rest}
    className={classnames(className, CommentTitle.meta.ukClass)}
  />
);

CommentTitle.propTypes = {
  ...BlockElement.propTypes,
  as: PropTypes.oneOf(HTML.HEADING_ELEMENTS),
};

CommentTitle.defaultProps = {
  as: 'h4',
};

CommentTitle.meta = {
  name: 'CommentTitle',
  ukClass: 'uk-comment-title',
};

export default CommentTitle;
