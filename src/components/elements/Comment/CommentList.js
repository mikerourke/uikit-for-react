import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../../base';
import Comment from './Comment';

export default class CommentList extends React.Component {
  static displayName = 'CommentList';

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
  };

  static Comment = Comment;

  render() {
    const { children, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-comment-list');
    return (
      <ul {...rest} className={classes}>
        {React.Children.map(children, child => <li>{child}</li>)}
      </ul>
    );
  }
}