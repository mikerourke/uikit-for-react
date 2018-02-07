import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Position, Width } from '../../common';

export default class CommentHeader extends React.Component {
  static displayName = 'CommentHeader';

  static propTypes = {
    as: customPropTypes.customOrStringElement('header'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    position: Position.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'header',
    className: '',
  };

  render() {
    const {
      as,
      className,
      flex,
      inverse,
      margin,
      position,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-comment-header',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Position.getClasses(position),
      Width.getClasses(width),
    );

    const Element = getElementType(CommentHeader, as);
    return <Element {...rest} className={classes} />;
  }
}
