import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

export default class CommentMeta extends BlockElement {
  static meta = {
    name: 'CommentMeta',
    ukClass: 'uk-comment-meta',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOf(['p', 'ul']),
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'ul',
  };

  render() {
    const { className, ...rest } = this.props;

    return (
      <BlockElement
        {...rest}
        className={classnames(className, CommentMeta.meta.ukClass)}
      />
    );
  }
}
