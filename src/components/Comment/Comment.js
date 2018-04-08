import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';
import CommentAvatar from './CommentAvatar';
import CommentBody from './CommentBody';
import CommentHeader from './CommentHeader';
import CommentList from './CommentList';
import CommentMeta from './CommentMeta';
import CommentTitle from './CommentTitle';

export default class Comment extends React.Component {
  static displayName = 'Comment';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('article'),
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'article',
    primary: false,
  };

  static Avatar = CommentAvatar;
  static Body = CommentBody;
  static Header = CommentHeader;
  static List = CommentList;
  static Meta = CommentMeta;
  static Title = CommentTitle;

  render() {
    const { className, primary, ...rest } = this.props;

    const classes = classnames(className, 'uk-comment', {
      'uk-comment-primary': primary,
    });

    return <Base {...rest} className={classes} component={Comment} />;
  }
}
