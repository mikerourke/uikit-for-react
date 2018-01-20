import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InlineElement } from '../Base';

const CommentAvatar = ({ className, ...rest }) => (
  <InlineElement
    {...rest}
    as="img"
    className={classnames(className, CommentAvatar.meta.ukClass)}
  />
);

CommentAvatar.propTypes = {
  ...InlineElement.propTypes,
  className: PropTypes.string,
};

CommentAvatar.meta = {
  name: 'CommentAvatar',
  ukClass: 'uk-comment-avatar',
};

export default CommentAvatar;
