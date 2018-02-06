import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class CommentHeader extends React.Component {
  static displayName = 'CommentHeader';

  static propTypes = {
    as: customPropTypes.customOrStringElement('header'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'header',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-comment-header');
    const Element = getElementType(CommentHeader, this.props);
    return <Element {...rest} className={classes} />;
  }
}
