import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class CommentMeta extends React.Component {
  static displayName = 'CommentMeta';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('p', 'ul'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'p',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-comment-meta');
    return <Base {...rest} className={classes} component={CommentMeta} />;
  }
}
