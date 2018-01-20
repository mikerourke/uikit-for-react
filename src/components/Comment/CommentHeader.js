import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { Block } from '../Base';

const CommentHeader = ({ className, ...rest }) => (
  <Block
    {...rest}
    as="header"
    className={classnames(className, CommentHeader.meta.ukClass)}
  />
);

CommentHeader.propTypes = {
  ...omit(Block.propTypes, 'as'),
  className: PropTypes.string,
};

CommentHeader.meta = {
  name: 'CommentHeader',
  ukClass: 'uk-comment-header',
};

export default CommentHeader;
