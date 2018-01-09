import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, isNil, without } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  getOptionsString,
  UIK,
} from '../../lib';
import GridCell from './GridCell';

class Grid extends React.Component {
  static meta = {
    name: 'Grid',
    ukClass: 'uk-grid',
  };

  static displayName = 'Grid';

  static propTypes = {
    /** HTML element or component to use for the grid. */
    as: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.oneOf(['div']),
    ]),

    /**
     * Define the vertical alignment of grid items. By default, grid items fill the height of their
     *    container.
     */
    alignItems: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Define the width to apply to all child items. */
    childWidth: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.CHILD_WIDTHS),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.CHILD_WIDTHS)),
    ]),

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /**
     * Define the axis that grid cells are placed on and their direction. By default, items run
     *    horizontally from left to right.
     */
    direction: PropTypes.shape({
      as: PropTypes.oneOf(['column', 'row']),
      reverse: PropTypes.bool,
    }),

    /** Add a separator line between grid cells. */
    divider: PropTypes.bool,

    /** Class to add to the first element in each row. */
    firstColumn: PropTypes.string,

    /** Specify how much space a flex item should take up. */
    grow: PropTypes.oneOf(['auto', 'full', 'none']),

    /** Apply a different gutter (spacing between grid elements). */
    gutter: PropTypes.oneOf([...without(UIK.SIZES, 'xlarge'), 'collapse']),

    /**
     * Defines the horizontal alignment of grid cells and distribute the space between them.
     *    Optionally specify an alignment for each breakpoint.
     */
    justifyContent: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS)),
    ]),

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Match the height of the child of each cell. */
    matchHeight: PropTypes.bool,

    /**
     * Properties of items that break into the next row, typically to create margin to the
     *    previous row.
     */
    nextRow: PropTypes.shape({
      spacing: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
      location: PropTypes.oneOf(UIK.LOCATIONS),
    }),

    /** Display the item as the first or last element in the grid. */
    order: commonPropTypes.order,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,

    /**
     * Add a scrolling parallax effect to columns within a Grid.
     * @property {string} target Selector string for child elements to translate. Defaults to
     *    element's children.
     * @property {number} translate Translate value (must be a positive integer).
     */
    parallax: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        target: PropTypes.string,
        translate: PropTypes.number,
      }),
    ]),

    /** Align text horizontally to a specific location or specify breakpoints. */
    textAlign: PropTypes.oneOfType([
      PropTypes.oneOf([...UIK.HORIZONTAL_POSITIONS, 'justify']),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS)),
    ]),

    /** Apply a width based on the size of the parent container. */
    width: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.BASE_WIDTHS),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.BASE_WIDTHS)),
    ]),

    /**
     * By default, grid cells are fit into one line and run from left to right. Change these to
     *    modify the behavior of wrapping grid cells.
     */
    wrap: PropTypes.shape({
      type: PropTypes.oneOf(['nowrap', 'reverse', 'wrap']),
      alignment: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),
    }),
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  static Cell = GridCell;

  render() {
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
      margin,
      matchHeight,
      nextRow,
      order,
      padding,
      parallax,
      textAlign,
      width,
      wrap,
      ...rest
    } = this.props;

    const isReverse = get(direction, 'reverse', false);
    const flexGrow = (isNil(grow)) ? null : grow.replace('full', '1');

    const classes = classnames(
      className,
      buildClassName('flex', alignItems),
      buildObjectOrValueClassNames('child-width', childWidth),
      buildClassName('flex', get(direction, 'as'), (isReverse ? 'reverse' : '')),
      buildObjectOrValueClassNames('flex', justifyContent),
      buildObjectOrValueClassNames('flex', order),
      buildClassName('flex', get(wrap, 'type')),
      buildClassName('flex', get(wrap, 'alignment')),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      buildObjectOrValueClassNames('text', textAlign),
      buildObjectOrValueClassNames('width', width),
      {
        [buildClassName(Grid.meta.ukClass, 'divider')]: (divider),
        [buildClassName(Grid.meta.ukClass, gutter)]: (!isNil(gutter)),
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

    const Element = getElementType(Grid, as, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        data-uk-grid={(isNil(parallax)) ? gridAttributeOptions : undefined}
        data-uk-grid-parallax={(!isNil(parallax)) ? parallaxAttributeOptions : undefined}
      >
        {children}
      </Element>
    );
  }
}

export default Grid;
