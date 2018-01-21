import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InlineElement } from '../Base';

export default class CommentAvatar extends InlineElement {
  static meta = {
    name: 'CommentAvatar',
    ukClass: 'uk-comment-avatar',
  };

  static propTypes = {
    ...InlineElement.propTypes,
    className: PropTypes.string,
  };

  render() {
    const { className, ...rest } = this.props;

    return (
      <InlineElement
        {...rest}
        as="img"
        className={classnames(className, CommentAvatar.meta.ukClass)}
      />
    );
  }
}
