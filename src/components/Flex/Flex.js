import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, omit } from 'lodash';
import {
  buildClassName,
  getElementType,
  HTML,
  UIK,
} from '../../lib';
import { Block } from '../Base';

export default class Flex extends Block {
  static meta = {
    name: 'Flex',
    ukClass: 'uk-flex',
  };

  static propTypes = {
    ...omit(Block.propTypes, 'flex'),
    as: PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
    childWidth: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.CHILD_WIDTHS),
      PropTypes.shape({
        atSm: PropTypes.oneOf(UIK.CHILD_WIDTHS),
        atMd: PropTypes.oneOf(UIK.CHILD_WIDTHS),
        atLg: PropTypes.oneOf(UIK.CHILD_WIDTHS),
        atXl: PropTypes.oneOf(UIK.CHILD_WIDTHS),
      }),
    ]),
    className: PropTypes.string,
    inline: PropTypes.bool,
  };

  static defaultProps = {
    as: 'div',
    inline: false,
  };

  render() {
    const {
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      alignItems,
      as,
      children,
      childWidth,
      className,
      inline,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      Flex.meta.ukClass,
      buildClassName(Flex.meta.ukClass, alignItems),
      buildClassName('child', 'width', childWidth),
      buildClassName('child', 'width', get(childWidth, 'atSm'), '@s'),
      buildClassName('child', 'width', get(childWidth, 'atMd'), '@m'),
      buildClassName('child', 'width', get(childWidth, 'atLg'), '@l'),
      buildClassName('child', 'width', get(childWidth, 'atXl'), '@xl'),
      {
        [buildClassName(Flex.meta.ukClass, 'inline')]: (inline),
      },
    );

    const Element = getElementType(Flex, this.props);
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
