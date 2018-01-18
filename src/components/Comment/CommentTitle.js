import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { HTML } from '../../lib';
import { Block } from '../Base';

const CommentTitle = ({ className, ...rest }) => (
  <Block
    {...rest}
    className={classnames(className, CommentTitle.meta.ukClass)}
  />
);

CommentTitle.propTypes = {
  ...Block.propTypes,
  as: PropTypes.oneOf(HTML.HEADING_ELEMENTS),
};

CommentTitle.defaultProps = {
  as: 'h4',
};

CommentTitle.meta = {
  name: 'CommentTitle',
  ukClass: 'uk-comment-title',
};

export default CommentTitle;
