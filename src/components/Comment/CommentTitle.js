import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { HTML } from '../../lib';
import { BlockElement } from '../Base';

export default class CommentTitle extends BlockElement {
  static meta = {
    name: 'CommentTitle',
    ukClass: 'uk-comment-title',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOf(HTML.HEADING_ELEMENTS),
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'h4',
  };

  render() {
    const { className, ...rest } = this.props;

    return (
      <BlockElement
        {...rest}
        className={classnames(className, CommentTitle.meta.ukClass)}
      />
    );
  }
}
