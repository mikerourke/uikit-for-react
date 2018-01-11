import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
} from '../../lib';
import CommentBody from './CommentBody';
import CommentHeader from './CommentHeader';
import CommentMeta from './CommentMeta';
import CommentTitle from './CommentTitle';

class Comment extends React.Component {
  static meta = {
    name: 'Comment',
    ukClass: 'uk-comment',
  };

  static propTypes = {
    as: PropTypes.oneOf(['article', 'ul']),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,
    primary: PropTypes.bool,
  };

  static defaultProps = {
    as: 'article',
    className: '',
  };

  static Body = CommentBody;
  static Header = CommentHeader;
  static Meta = CommentMeta;
  static Title = CommentTitle;

  render() {
    const {
      as,
      children,
      className,
      margin,
      padding,
      primary,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Comment.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      {
        [buildClassName(Comment.meta.ukClass, 'list')]: (as === 'ul'),
        [buildClassName(Comment.meta.ukClass, 'primary')]: (primary),
      },
    );

    const Element = getElementType(Comment, as, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
      >
        {children}
      </Element>
    );
  }
}

export default Comment;
