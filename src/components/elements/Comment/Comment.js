import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Text, Width } from '../../common';
import CommentAvatar from './CommentAvatar';
import CommentBody from './CommentBody';
import CommentHeader from './CommentHeader';
import CommentList from './CommentList';
import CommentMeta from './CommentMeta';
import CommentTitle from './CommentTitle';

export default class Comment extends React.Component {
  static displayName = 'Comment';

  static propTypes = {
    as: customPropTypes.customOrStringElement('article'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    primary: PropTypes.bool,
    text: Text.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
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
    const {
      as,
      className,
      flex,
      inverse,
      margin,
      primary,
      text,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-comment',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Width.getClasses(width),
      {
        'uk-comment-primary': primary,
      },
    );

    const Element = getElementType(Comment, as);
    return <Element {...rest} className={classes} />;
  }
}
