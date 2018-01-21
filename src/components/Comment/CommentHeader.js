import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

export default class CommentHeader extends BlockElement {
  static meta = {
    name: 'CommentHeader',
    ukClass: 'uk-comment-header',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    className: PropTypes.string,
  };

  render() {
    const { className, ...rest } = this.props;

    return (
      <BlockElement
        {...rest}
        as="header"
        className={classnames(className, CommentHeader.meta.ukClass)}
      />
    );
  }
}
