import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin } from '../../common';
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
    margin: Margin.propTypes,
    primary: PropTypes.bool,
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
    const { as, className, flex, margin, primary, ...rest } = this.props;

    const ukClass = 'uk-comment';
    const classes = classnames(
      className,
      ukClass,
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      {
        [buildClassName(ukClass, 'primary')]: primary,
      },
    );

    const Element = getElementType(Comment, this.props);
    return <Element {...rest} className={classes} />;
  }
}
