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
  static displayName = 'Comment';

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    primary: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
    primary: false,
  };

  static Avatar = CommentAvatar;
  static Body = CommentBody;
  static Header = CommentHeader;
  static Meta = CommentMeta;
  static Title = CommentTitle;

  render() {
    const { children, className, primary, ...rest } = this.props;

    const ukClass = 'uk-comment';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'primary')]: primary,
    });

    return (
      <BlockElement {...rest} as="article" className={classes || undefined}>
        {children}
      </BlockElement>
    );
  }
}
