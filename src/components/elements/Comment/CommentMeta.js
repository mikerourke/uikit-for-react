import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class CommentMeta extends React.Component {
  static displayName = 'CommentMeta';

  static propTypes = {
    as: customPropTypes.customOrStringElement('p', 'ul'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'p',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-comment-meta');
    const Element = getElementType(CommentMeta, this.props);
    return <Element {...rest} className={classes} />;
  }
}
