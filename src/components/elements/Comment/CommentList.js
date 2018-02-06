import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class CommentList extends React.Component {
  static displayName = 'CommentList';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    nested: PropTypes.bool,
  };

  static defaultProps = {
    as: 'ul',
    className: '',
    nested: false,
  };

  render() {
    const { as, children, className, nested, ...rest } = this.props;

    const classes = classnames(className, {
      'uk-comment-list': !nested,
    });

    const Element = getElementType(CommentList, this.props);
    return (
      <Element {...rest} className={classes || undefined}>
        {React.Children.map(children, child => <li>{child}</li>)}
      </Element>
    );
  }
}
