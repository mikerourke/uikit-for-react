import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';

export default class CommentList extends React.Component {
  static displayName = 'CommentList';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    nested: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'ul',
    className: '',
    nested: false,
  };

  render() {
    const { children, className, nested, ...rest } = this.props;
    const classes = classnames(className, {
      'uk-comment-list': !nested,
    });
    return (
      <BlockElement {...rest} className={classes}>
        {React.Children.map(children, child => <li>{child}</li>)}
      </BlockElement>
    );
  }
}
