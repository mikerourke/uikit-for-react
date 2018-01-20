import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { Inline } from '../Base';

const CommentAvatar = ({ className, ...rest }) => (
  <Inline
    {...rest}
    as="img"
    className={classnames(className, CommentAvatar.meta.ukClass)}
  />
);

CommentAvatar.propTypes = {
  ...omit(Inline.propTypes, 'as'),
  className: PropTypes.string,
};

CommentAvatar.meta = {
  name: 'CommentAvatar',
  ukClass: 'uk-comment-avatar',
};

export default CommentAvatar;
