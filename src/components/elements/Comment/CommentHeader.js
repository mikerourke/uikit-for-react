import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class CommentHeader extends React.Component {
  static displayName = 'CommentHeader';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('header'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'header',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-comment-header');

    return <Base {...rest} className={classes} component={CommentHeader} />;
  }
}
