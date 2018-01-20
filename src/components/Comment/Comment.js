import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { BlockElement } from '../Base';
import CommentAvatar from './CommentAvatar';
import CommentBody from './CommentBody';
import CommentHeader from './CommentHeader';
import CommentMeta from './CommentMeta';
import CommentTitle from './CommentTitle';

export default class Comment extends BlockElement {
  static meta = {
    name: 'Comment',
    ukClass: 'uk-comment',
  };

  static propTypes = {
    ...BlockElement.propTypes,
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
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const { children, className, primary, ...rest } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      Comment.meta.ukClass,
      {
        [buildClassName(Comment.meta.ukClass, 'primary')]: primary,
      },
    );

    return (
      <article
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {children}
      </article>
    );
  }
}
