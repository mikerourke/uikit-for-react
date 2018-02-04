import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';

export default class CommentMeta extends React.Component {
  static displayName = 'CommentMeta';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringElement('p', 'ul'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'p',
    className: '',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-comment-meta');
    return <BlockElement {...rest} className={classes} />;
  }
}
