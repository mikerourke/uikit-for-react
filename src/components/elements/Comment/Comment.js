import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib';
import { BlockElement } from '../../base';
import CommentAvatar from './CommentAvatar';
import CommentBody from './CommentBody';
import CommentHeader from './CommentHeader';
import CommentMeta from './CommentMeta';
import CommentTitle from './CommentTitle';

export default class Comment extends React.Component {
  static displayName = 'Comment';

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    primary: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: '',
    primary: false,
  };

  static Avatar = CommentAvatar;
  static Body = CommentBody;
  static Header = CommentHeader;
  static Meta = CommentMeta;
  static Title = CommentTitle;

  render() {
    const { className, primary, ...rest } = this.props;

    const ukClass = 'uk-comment';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'primary')]: primary,
    });

    return <BlockElement {...rest} as="article" className={classes} />;
  }
}
