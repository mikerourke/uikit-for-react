import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
  HTML,
} from '../../lib';
import Base from './BaseElement';
import Block from './BlockElement';
import Inline from './InlineElement';

export default class AnyElement extends Base {
  static meta = {
    name: 'AnyElement',
  };

  static propTypes = {
    ...Block.propTypes,
    ...Inline.propTypes,
    as: PropTypes.oneOfType([
      PropTypes.oneOf(HTML.ALL_ELEMENTS),
      PropTypes.element,
      PropTypes.func,
    ]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'div',
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
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
    );

    const Element = getElementType(AnyElement, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        {...attributes}
      >
        {children}
      </Element>
    );
  }
}

