import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

const CommentMeta = ({ className, ...rest }) => (
  <BlockElement
    {...rest}
    className={classnames(className, CommentMeta.meta.ukClass)}
  />
);

CommentMeta.propTypes = {
  ...BlockElement.propTypes,
  as: PropTypes.oneOf(['p', 'ul']),
};

CommentMeta.defaultProps = {
  as: 'ul',
};

CommentMeta.meta = {
  name: 'CommentMeta',
  ukClass: 'uk-comment-meta',
};

export default CommentMeta;
