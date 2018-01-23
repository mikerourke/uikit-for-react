import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

export default class CommentMeta extends BlockElement {
  static displayName = 'CommentMeta';

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOf(['p', 'ul']),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'ul',
    className: null,
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-comment-meta');
    return <BlockElement {...rest} className={classes || undefined} />;
  }
}
