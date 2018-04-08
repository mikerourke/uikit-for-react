import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class CommentAvatar extends React.Component {
  static displayName = 'CommentAvatar';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('img'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'img',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-comment-avatar');

    return <Base {...rest} className={classes} component={CommentAvatar} />;
  }
}
