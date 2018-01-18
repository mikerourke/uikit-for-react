import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import {
  buildClassName,
  buildStyles,
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
    ...Block.propTypes,
    alignItems: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),
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
    direction: PropTypes.shape({
      as: PropTypes.oneOf(['column', 'row']),
      reverse: PropTypes.bool,
    }),
    inline: PropTypes.bool,
    justifyContent: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
      PropTypes.shape({
        atSm: PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
        atMd: PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
        atLg: PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
        atXl: PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
      }),
    ]),
    wrap: PropTypes.shape({
      type: PropTypes.oneOf(['nowrap', 'reverse', 'wrap']),
      alignment: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),
    }),
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
      direction,
      inline,
      justifyContent,
      wrap,
      ...rest
    } = unhandledProps;

    const isReverse = get(direction, 'reverse', false);

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
      buildClassName(Flex.meta.ukClass, get(direction, 'as'), (isReverse ? 'reverse' : '')),
      buildClassName(Flex.meta.ukClass, justifyContent),
      buildClassName(Flex.meta.ukClass, get(justifyContent, 'atSm'), '@s'),
      buildClassName(Flex.meta.ukClass, get(justifyContent, 'atMd'), '@m'),
      buildClassName(Flex.meta.ukClass, get(justifyContent, 'atLg'), '@l'),
      buildClassName(Flex.meta.ukClass, get(justifyContent, 'atXl'), '@xl'),
      buildClassName(Flex.meta.ukClass, get(wrap, 'type')),
      buildClassName(Flex.meta.ukClass, get(wrap, 'alignment')),
      {
        [buildClassName(Flex.meta.ukClass, 'inline')]: (inline),
      },
    );
    const styles = buildStyles(this.props);

    const Element = getElementType(Flex, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={styles}
        style={blockStyle}
        {...attributes}
      >
        {children}
      </Element>
    );
  }
}
