import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, isNil, without } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  UIK,
} from '../../lib';

class Grid extends React.Component {
  static meta = {
    name: 'Grid',
    ukClass: 'uk-grid',
  };

  static propTypes = {
    /**
     * Define the vertical alignment of grid items. By default, grid items fill the height of their
     *    container.
     */
    alignItems: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /**
     * Define the axis that grid items are placed on and their direction. By default, items run
     *    horizontally from left to right.
     */
    direction: PropTypes.shape({
      as: PropTypes.oneOf(['column', 'row']),
      reverse: PropTypes.bool,
    }),

    /** Add a separator line between grid cells. */
    divider: PropTypes.bool,

    /** Properties to apply to component if it a child of a Flex container. */
    flexItem: commonPropTypes.flex,

    /** Apply a different gutter (spacing between grid elements). */
    gutter: PropTypes.oneOf([...without(UIK.SIZES, 'xlarge'), 'collapse']),

    /**
     * Defines the horizontal alignment of grid items and distribute the space between them.
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

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,

    /**
     * By default, grid items are fit into one line and run from left to right. Change these to
     *    modify the behavior of wrapping grid items.
     */
    wrap: PropTypes.shape({
      type: PropTypes.oneOf(['nowrap', 'reverse', 'wrap']),
      alignment: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),
    }),
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const {
      alignItems,
      children,
      className,
      direction,
      divider,
      flexItem,
      gutter,
      justifyContent,
      margin,
      matchHeight,
      padding,
      wrap,
      ...rest
    } = this.props;

    const isReverse = get(direction, 'reverse', false);

    const classes = classnames(
      className,
      buildClassName('flex', alignItems),
      buildClassName('flex', get(direction, 'as'), (isReverse ? 'reverse' : '')),
      buildObjectOrValueClassNames('flex', justifyContent),
      buildObjectOrValueClassNames('flexItem', flexItem),
      buildClassName('flex', get(wrap, 'type')),
      buildClassName('flex', get(wrap, 'alignment')),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      {
        [buildClassName(Grid.meta.ukClass, 'divider')]: (divider),
        [buildClassName(Grid.meta.ukClass, gutter)]: (!isNil(gutter)),
        [buildClassName(Grid.meta.ukClass, 'match')]: (matchHeight),
      },
    );

    return (
      <div
        {...rest}
        className={classes || undefined}
        data-uk-grid
      >
        {children}
      </div>
    );
  }
}

export default Grid;
