import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Block } from '../Base';

const CommentMeta = ({ className, ...rest }) => (
  <Block
    {...rest}
    className={classnames(className, CommentMeta.meta.ukClass)}
  />
);

CommentMeta.propTypes = {
  ...Block.propTypes,
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
