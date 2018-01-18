import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
  getIfChildrenHaveClass,
} from '../../lib';
import { Block } from '../Base';

class Container extends Block {
  static meta = {
    name: 'Container',
    ukClass: 'uk-container',
  };

  static propTypes = {
    ...Block.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(['expand', 'large', 'small']),
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
      as,
      children,
      className,
      size,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
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
        style={blockStyle}
        {...attributes}
      >
        {children}
      </Element>
    );
  }
}

export default Container;
