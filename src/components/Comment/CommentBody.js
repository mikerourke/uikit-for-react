import React from 'react';
import classnames from 'classnames';
import { Block } from '../Base';

const CommentBody = ({ className, ...rest }) => (
  <Block
    {...rest}
    className={classnames(className, CommentBody.meta.ukClass)}
  />
);

CommentBody.propTypes = Block.propTypes;

CommentBody.meta = {
  name: 'CommentBody',
  ukClass: 'uk-comment-body',
};

export default CommentBody;
