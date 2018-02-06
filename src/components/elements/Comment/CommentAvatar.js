import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class CommentAvatar extends React.Component {
  static displayName = 'CommentAvatar';

  static propTypes = {
    as: customPropTypes.customOrStringElement('img'),
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'img',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-comment-avatar');
    const Element = getElementType(CommentAvatar, as);
    return <Element {...rest} className={classes} />;
  }
}
