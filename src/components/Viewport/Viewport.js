import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getElementType, getOptionsString } from '../../lib';
import { BlockElement } from '../Base';

export default class Viewport extends BlockElement {
  static meta = {
    name: 'Viewport',
    ukClass: 'uk-viewport',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    expand: PropTypes.bool,
    minHeight: PropTypes.number,
    offsetBottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    offsetTop: PropTypes.bool,
  };

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      children,
      className,
      expand,
      minHeight,
      offsetBottom,
      offsetTop,
      ...rest
    } = unhandledProps;

    const classes = classnames(className, inheritedClasses);

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
        style={inheritedStyle}
        data-uk-height-viewport={componentOptions}
        {...inheritedAttributes}
      >
        {children}
      </Element>
    );
  }
}
