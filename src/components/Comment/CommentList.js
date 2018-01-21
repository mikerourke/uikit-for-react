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
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static Comment = Comment;

  render() {
    const { children, className, ...rest } = this.props;

    const classes = classnames(className, CommentList.meta.ukClass);

    return (
      <ul {...rest} className={classes || undefined}>
        {React.Children.map(children, child => <li>{child}</li>)}
      </ul>
    );
  }
}
