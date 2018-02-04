import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';
import CommentAvatar from './CommentAvatar';
import CommentBody from './CommentBody';
import CommentHeader from './CommentHeader';
import CommentList from './CommentList';
import CommentMeta from './CommentMeta';
import CommentTitle from './CommentTitle';

export default class Comment extends React.Component {
  static displayName = 'Comment';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringElement('article'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    primary: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'article',
    className: '',
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
    const ukClass = 'uk-comment';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'primary')]: primary,
    });
    return <BlockElement {...rest} className={classes} />;
  }
}
