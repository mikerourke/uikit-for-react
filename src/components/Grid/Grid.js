import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, isNil, without } from 'lodash';
import {
  buildClassName,
  getElementType,
  getOptionsString,
  UIK,
} from '../../lib';
import { Block } from '../Base';
import GridCell from './GridCell';

export default class Grid extends Block {
  static meta = {
    name: 'Grid',
    ukClass: 'uk-grid',
  };

  static displayName = 'Grid';

  static propTypes = {
    ...Block.propTypes,
    as: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.oneOf(['div']),
    ]),
    alignItems: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),
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
    divider: PropTypes.bool,
    firstColumn: PropTypes.string,
    grow: PropTypes.oneOf(['auto', 'full', 'none']),
    gutter: PropTypes.oneOf([...without(UIK.SIZES, 'xlarge'), 'collapse']),
    justifyContent: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
      PropTypes.shape({
        atSm: PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
        atMd: PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
        atLg: PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
        atXl: PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
      }),
    ]),
    matchHeight: PropTypes.bool,
    nextRow: PropTypes.shape({
      spacing: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
      location: PropTypes.oneOf(UIK.LOCATIONS),
    }),
    order: PropTypes.oneOfType([
      PropTypes.oneOf(['first', 'last']),
      PropTypes.shape({
        first: PropTypes.oneOf(UIK.BREAKPOINTS),
        last: PropTypes.oneOf(UIK.BREAKPOINTS),
      }),
    ]),
    parallax: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        target: PropTypes.string,
        translate: PropTypes.number,
      }),
    ]),
    wrap: PropTypes.shape({
      type: PropTypes.oneOf(['nowrap', 'reverse', 'wrap']),
      alignment: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),
    }),
  };

  static defaultProps = {
    as: 'div',
    divider: false,
    matchHeight: false,
  };

  static Cell = GridCell;

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
      divider,
      firstColumn,
      gutter,
      grow,
      justifyContent,
      matchHeight,
      nextRow,
      order,
      parallax,
      wrap,
      ...rest
    } = unhandledProps;

    const isReverse = get(direction, 'reverse', false);
    const flexGrow = (isNil(grow)) ? null : grow.replace('full', '1');

    const classes = classnames(
      className,
      blockClasses,
      buildClassName('flex', alignItems),
      buildClassName('child', 'width', childWidth),
      buildClassName('child', 'width', get(childWidth, 'atSm'), '@s'),
      buildClassName('child', 'width', get(childWidth, 'atMd'), '@m'),
      buildClassName('child', 'width', get(childWidth, 'atLg'), '@l'),
      buildClassName('child', 'width', get(childWidth, 'atXl'), '@xl'),
      buildClassName('flex', get(direction, 'as'), (isReverse ? 'reverse' : '')),
      buildClassName(Grid.meta.ukClass, gutter),
      buildClassName('flex', justifyContent),
      buildClassName('flex', get(justifyContent, 'atSm'), '@s'),
      buildClassName('flex', get(justifyContent, 'atMd'), '@m'),
      buildClassName('flex', get(justifyContent, 'atLg'), '@l'),
      buildClassName('flex', get(justifyContent, 'atXl'), '@xl'),
      buildClassName('flex', order),
      buildClassName('flex', 'first', get(order, 'first')),
      buildClassName('flex', 'last', get(order, 'last')),
      buildClassName('flex', get(wrap, 'type')),
      buildClassName('flex', get(wrap, 'alignment')),
      {
        [buildClassName(Grid.meta.ukClass, 'divider')]: (divider),
        [buildClassName(Grid.meta.ukClass, 'match')]: (matchHeight),
        [buildClassName('flex', flexGrow)]: (!isNil(grow)),
      },
    );

    const gridAttributeOptions = getOptionsString({
      firstColumn: (isNil(firstColumn)) ? 'uk-first-column' : firstColumn,
      margin: (isNil(nextRow))
        ? 'uk-grid-margin'
        : buildClassName('margin', get(nextRow, 'spacing', null), get(nextRow, 'location', null)),
    });

    const parallaxAttributeOptions = getOptionsString({
      target: get(parallax, 'target', false),
      translate: get(parallax, 'translate', 150),
    });

    const Element = getElementType(Grid, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        data-uk-grid={(isNil(parallax)) ? gridAttributeOptions : undefined}
        data-uk-grid-parallax={(!isNil(parallax)) ? parallaxAttributeOptions : undefined}
        {...attributes}
      >
        {children}
      </Element>
    );
  }
}
