import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';
import Comment from './Comment';

export default class CommentList extends BlockElement {
  static meta = {
    name: 'CommentList',
    ukClass: 'uk-comment-list',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    as: undefined,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static Comment = Comment;

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const { children, className, ...rest } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      CommentList.meta.ukClass,
    );

    return (
      <ul
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {React.Children.map(children, child => <li>{child}</li>)}
      </ul>
    );
  }
}
