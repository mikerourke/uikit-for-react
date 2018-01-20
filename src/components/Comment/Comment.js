import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { buildClassName } from '../../lib';
import { Block } from '../Base';
import CommentAvatar from './CommentAvatar';
import CommentBody from './CommentBody';
import CommentHeader from './CommentHeader';
import CommentMeta from './CommentMeta';
import CommentTitle from './CommentTitle';

export default class Comment extends Block {
  static meta = {
    name: 'Comment',
    ukClass: 'uk-comment',
  };

  static propTypes = {
    ...omit(Block.propTypes, 'as'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    primary: PropTypes.bool,
  };

  static defaultProps = {
    primary: false,
  };

  static Avatar = CommentAvatar;
  static Body = CommentBody;
  static Header = CommentHeader;
  static Meta = CommentMeta;
  static Title = CommentTitle;

  render() {
    const {
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      children,
      className,
      primary,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      Comment.meta.ukClass,
      {
        [buildClassName(Comment.meta.ukClass, 'primary')]: (primary),
      },
    );

    return (
      <article
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        {...attributes}
      >
        {children}
      </article>
    );
  }
}
