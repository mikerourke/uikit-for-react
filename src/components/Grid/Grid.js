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
    divider: PropTypes.bool,
    firstColumn: PropTypes.string,
    grow: PropTypes.oneOf(['auto', 'full', 'none']),
    gutter: PropTypes.oneOf([...without(UIK.SIZES, 'xlarge'), 'collapse']),
    matchHeight: PropTypes.bool,
    nextRow: PropTypes.shape({
      spacing: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
      location: PropTypes.oneOf(UIK.LOCATIONS),
    }),
    parallax: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        target: PropTypes.string,
        translate: PropTypes.number,
      }),
    ]),
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
      as,
      children,
      childWidth,
      className,
      direction,
      divider,
      firstColumn,
      gutter,
      grow,
      matchHeight,
      nextRow,
      parallax,
      ...rest
    } = unhandledProps;

    const isReverse = get(direction, 'reverse', false);
    const flexGrow = (isNil(grow)) ? null : grow.replace('full', '1');

    const classes = classnames(
      className,
      blockClasses,
      buildClassName('child', 'width', childWidth),
      buildClassName('child', 'width', get(childWidth, 'atSm'), '@s'),
      buildClassName('child', 'width', get(childWidth, 'atMd'), '@m'),
      buildClassName('child', 'width', get(childWidth, 'atLg'), '@l'),
      buildClassName('child', 'width', get(childWidth, 'atXl'), '@xl'),
      buildClassName('flex', get(direction, 'as'), (isReverse ? 'reverse' : '')),
      buildClassName(Grid.meta.ukClass, gutter),
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
