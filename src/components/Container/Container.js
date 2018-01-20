import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
  getIfChildrenHaveClass,
} from '../../lib';
import { BlockElement } from '../Base';

export default class Container extends BlockElement {
  static meta = {
    name: 'Container',
    ukClass: 'uk-container',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(['expand', 'large', 'small']),
  };

  static defaultProps = {
    as: 'div',
  };

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      as,
      children,
      className,
      size,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      Container.meta.ukClass,
      buildClassName(Container.meta.ukClass, size),
      {
        [buildClassName('inline')]: getIfChildrenHaveClass(children, 'position'),
      },
    );

    const Element = getElementType(Container, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {children}
      </Element>
    );
  }
}
