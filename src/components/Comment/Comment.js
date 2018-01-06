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
    /** HTML element to use for the component. */
    as: PropTypes.oneOf(['article', 'ul']),

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Options for adding spacing between elements and their content. */
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
      buildClassName('comment', 'primary', primary),
      {
        [buildClassName('comment', 'list')]: (as === 'ul'),
      },
    );

    const Element = getElementType(Comment, as, rest);
    return (
      <Element
        {...rest}
        className={classes}
      >
        {children}
      </Element>
    );
  }
}

export default Comment;
