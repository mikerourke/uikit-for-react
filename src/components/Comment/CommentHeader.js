import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

const CommentHeader = ({ className, ...rest }) => (
  <BlockElement
    {...rest}
    as="header"
    className={classnames(className, CommentHeader.meta.ukClass)}
  />
);

CommentHeader.propTypes = {
  ...BlockElement.propTypes,
  className: PropTypes.string,
};

CommentHeader.meta = {
  name: 'CommentHeader',
  ukClass: 'uk-comment-header',
};

export default CommentHeader;
