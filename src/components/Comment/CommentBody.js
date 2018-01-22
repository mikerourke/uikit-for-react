import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

export default class CommentBody extends BlockElement {
  static displayName = 'CommentBody';

  static propTypes = {
    ...BlockElement.propTypes,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-comment-body');
    return <BlockElement {...rest} className={classes || undefined} />;
  }
}
