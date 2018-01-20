import React from 'react';
import classnames from 'classnames';
import { BlockElement } from '../Base';

const CommentBody = ({ className, ...rest }) => (
  <BlockElement
    {...rest}
    className={classnames(className, CommentBody.meta.ukClass)}
  />
);

CommentBody.propTypes = BlockElement.propTypes;

CommentBody.meta = {
  name: 'CommentBody',
  ukClass: 'uk-comment-body',
};

export default CommentBody;
