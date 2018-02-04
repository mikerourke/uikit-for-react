import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import { InlineElement } from '../../base';

export default class CommentAvatar extends React.Component {
  static displayName = 'CommentAvatar';

  static propTypes = {
    ...InlineElement.propTypes,
    as: customPropTypes.customOrStringElement('img'),
    className: PropTypes.string,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    as: 'img',
    className: '',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-comment-avatar');
    return <InlineElement {...rest} className={classes} />;
  }
}
