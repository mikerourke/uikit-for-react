import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InlineElement } from '../../base';

export default class CommentAvatar extends React.Component {
  static displayName = 'CommentAvatar';

  static propTypes = {
    ...InlineElement.propTypes,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    className: null,
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-comment-avatar');
    return (
      <InlineElement {...rest} as="img" className={classes} />
    );
  }
}
