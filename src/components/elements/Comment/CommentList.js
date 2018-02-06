import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';

export default class CommentList extends React.Component {
  static displayName = 'CommentList';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    nested: PropTypes.bool,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'ul',
    className: '',
    nested: false,
  };

  render() {
    const {
      as,
      children,
      className,
      flex,
      margin,
      nested,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-comment-list': !nested,
      },
    );

    const Element = getElementType(CommentList, as);
    return (
      <Element {...rest} className={classes || undefined}>
        {React.Children.map(children, child => <li>{child}</li>)}
      </Element>
    );
  }
}
