import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class CommentList extends React.Component {
  static displayName = 'CommentList';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
    nested: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
    nested: false,
  };

  render() {
    const { children, className, nested, ...rest } = this.props;

    const classes = classnames(className, { 'uk-comment-list': !nested });

    return (
      <Base {...rest} className={classes || undefined} component={CommentList}>
        {React.Children.map(children, child => <li>{child}</li>)}
      </Base>
    );
  }
}
