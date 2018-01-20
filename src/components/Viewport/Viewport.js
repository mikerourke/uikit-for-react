import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  getElementType,
  getOptionsString,
} from '../../lib';
import { Block } from '../Base';

export default class Viewport extends Block {
  static meta = {
    name: 'Viewport',
    ukClass: 'uk-viewport',
  };

  static propTypes = {
    ...Block.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    expand: PropTypes.bool,
    minHeight: PropTypes.number,
    offsetBottom: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
    ]),
    offsetTop: PropTypes.bool,
  };

  render() {
    const {
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      children,
      className,
      expand,
      minHeight,
      offsetBottom,
      offsetTop,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
    );

    const componentOptions = getOptionsString({
      expand,
      minHeight,
      offsetBottom,
      offsetTop,
    });

    const Element = getElementType(Viewport, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        data-uk-height-viewport={componentOptions}
        {...attributes}
      >
        {children}
      </Element>
    );
  }
}

