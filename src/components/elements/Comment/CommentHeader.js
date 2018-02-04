import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';

export default class CommentHeader extends React.Component {
  static displayName = 'CommentHeader';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringElement('header'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'header',
    className: '',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-comment-header');
    return <BlockElement {...rest} className={classes} />;
  }
}
