import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, isNil, trim, without } from 'lodash';
import {
  buildClassName,
  getElementType,
  getOptionsString,
  HTML,
  UIK,
} from '../../lib';
import BaseElement from './BaseElement';

export default class BlockElement extends BaseElement {
  static meta = {
    name: 'Block',
  };

  static propTypes = {
    ...BaseElement.propTypes,
    as: PropTypes.oneOfType([
      PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
      PropTypes.element,
      PropTypes.func,
    ]),
    children: PropTypes.node,
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
    column: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.BASE_WIDTHS),
      PropTypes.shape({
        atSm: PropTypes.oneOf(UIK.BASE_WIDTHS),
        atMd: PropTypes.oneOf(UIK.BASE_WIDTHS),
        atLg: PropTypes.oneOf(UIK.BASE_WIDTHS),
        atXl: PropTypes.oneOf(UIK.BASE_WIDTHS),
        divider: PropTypes.bool,
      }),
      PropTypes.shape({
        width: PropTypes.oneOf(UIK.BASE_WIDTHS),
        divider: PropTypes.bool,
      }),
    ]),
    dynamic: PropTypes.bool,
    firstColumn: PropTypes.string,
    nextRow: PropTypes.shape({
      spacing: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
      location: PropTypes.oneOf(UIK.LOCATIONS),
    }),
    padding: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['large', 'small', 'remove']),
      PropTypes.shape({
        remove: PropTypes.oneOf([...UIK.AREAS, ...UIK.LOCATIONS]),
        size: PropTypes.oneOf(['large', 'small']),
      }),
    ]),
    position: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.LOCATIONS),
      PropTypes.oneOf(UIK.CSS_POSITIONS),
      PropTypes.shape({
        horizontal: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        vertical: PropTypes.oneOf(UIK.VERTICAL_POSITIONS),
        cover: PropTypes.bool,
        marginSize: PropTypes.oneOf(without(UIK.SIZES, 'xlarge')),
        type: PropTypes.oneOf(UIK.CSS_POSITIONS),
        zIndexOfOne: PropTypes.bool,
      }),
    ]),
    textAlign: PropTypes.oneOfType([
      PropTypes.oneOf([...UIK.HORIZONTAL_POSITIONS, 'justify']),
      PropTypes.shape({
        atSm: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        atMd: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        atLg: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        atXl: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
      }),
    ]),
  };

  static defaultProps = {
    as: 'div',
  };

  getBlockElements(props) {
    const {
      attributes,
      baseClasses,
      baseStyle,
      unhandledProps,
    } = this.getBaseElements(props);

    const {
      as,
      childWidth,
      column,
      dynamic,
      firstColumn,
      nextRow,
      padding,
      position,
      textAlign,
      ...rest
    } = unhandledProps;

    const horizProp = get(position, 'horizontal');
    const vertProp = get(position, 'vertical');
    const isCentered = (horizProp === 'center' && vertProp === 'center');

    const classes = classnames(
      baseClasses,
      buildClassName('child', 'width', childWidth),
      buildClassName('child', 'width', get(childWidth, 'atSm'), '@s'),
      buildClassName('child', 'width', get(childWidth, 'atMd'), '@m'),
      buildClassName('child', 'width', get(childWidth, 'atLg'), '@l'),
      buildClassName('child', 'width', get(childWidth, 'atXl'), '@xl'),
      buildClassName('column', column),
      buildClassName('column', get(column, 'width')),
      buildClassName('column', get(column, 'atSm'), '@s'),
      buildClassName('column', get(column, 'atMd'), '@m'),
      buildClassName('column', get(column, 'atLg'), '@l'),
      buildClassName('column', get(column, 'atXl'), '@xl'),
      buildClassName('padding', padding),
      buildClassName('padding', get(padding, 'size')),
      buildClassName('padding', 'remove', get(padding, 'remove')),
      buildClassName('position', position),
      buildClassName('position', 'cover', get(position, 'cover')),
      buildClassName('position', 'z', 'index', get(position, 'zIndexOfOne')),
      buildClassName('position', get(position, 'marginSize')),
      buildClassName('position', get(position, 'type')),
      buildClassName('text', textAlign),
      buildClassName('text', get(textAlign, 'atSm'), '@s'),
      buildClassName('text', get(textAlign, 'atMd'), '@m'),
      buildClassName('text', get(textAlign, 'atLg'), '@l'),
      buildClassName('text', get(textAlign, 'atXl'), '@xl'),
      {
        [buildClassName('column', 'divider')]: (get(column, 'divider', false)),
        [buildClassName('position', vertProp, horizProp)]: (!isCentered),
        [buildClassName('position', 'center')]: (isCentered),
      },
    );

    const hasMarginAttribute = ((dynamic === true) || !isNil(firstColumn) || !isNil(nextRow));

    const marginComponentOptions = getOptionsString({
      firstColumn: firstColumn || 'uk-first-column',
      margin: buildClassName(
        'margin',
        get(nextRow, 'spacing', 'small'),
        get(nextRow, 'location', 'top'),
      ),
    });

    return {
      attributes: {
        ...attributes,
        'data-uk-margin': (hasMarginAttribute) ? marginComponentOptions : undefined,
      },
      blockClasses: trim(classes),
      blockStyle: baseStyle,
      unhandledProps: rest,
    };
  }

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

    const classes = classnames(className, blockClasses);

    const Element = getElementType(BlockElement, this.props);
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
