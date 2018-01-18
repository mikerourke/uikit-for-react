import React from 'react';
import classnames from 'classnames';
import { Block } from '../Base';

const CommentHeader = ({ className, ...rest }) => (
  <Block
    {...rest}
    as="header"
    className={classnames(className, CommentHeader.meta.ukClass)}
  />
);

CommentHeader.propTypes = {
  ...Block.propTypes,
  as: undefined,
};

CommentHeader.meta = {
  name: 'CommentHeader',
  ukClass: 'uk-comment-header',
};

export default CommentHeader;
