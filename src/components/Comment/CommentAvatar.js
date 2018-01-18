import React from 'react';
import classnames from 'classnames';
import { Inline } from '../Base';

const CommentAvatar = ({ className, ...rest }) => (
  <Inline
    {...rest}
    as="img"
    className={classnames(className, CommentAvatar.meta.ukClass)}
  />
);

CommentAvatar.propTypes = {
  ...Inline.propTypes,
  as: undefined,
};

CommentAvatar.meta = {
  name: 'CommentAvatar',
  ukClass: 'uk-comment-avatar',
};

export default CommentAvatar;
