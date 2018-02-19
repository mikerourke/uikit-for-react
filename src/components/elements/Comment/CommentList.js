import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';

export default class CommentList extends React.Component {
  static displayName = 'CommentList';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    nested: PropTypes.bool,
    text: Text.propTypes,
    utility: Utility.propTypes,
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
      inverse,
      margin,
      nested,
      text,
      utility,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
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
