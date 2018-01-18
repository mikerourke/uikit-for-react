import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Block } from '../Base';
import Comment from './Comment';

export default class CommentList extends Block {
  static meta = {
    name: 'CommentList',
    ukClass: 'uk-comment-list',
  };

  static propTypes = {
    ...Block.propTypes,
    as: undefined,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static Comment = Comment;

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
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      CommentList.meta.ukClass,
    );

    return (
      <ul
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        {...attributes}
      >
        {React.Children.map(children, child => <li>{child}</li>)}
      </ul>
    );
  }
}
