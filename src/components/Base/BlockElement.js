import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, trim, without } from 'lodash';
import {
  buildClassName,
  getElementType,
  getOptionsString,
  HTML,
  UIK,
} from '../../lib';
import BaseElement from './BaseElement';

export default class BlockElement extends BaseElement {
  static displayName = 'BlockElement';

  static propTypes = {
    ...BaseElement.propTypes,
    childWidth: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.CHILD_WIDTHS),
      PropTypes.shape({
        atSm: PropTypes.oneOf(UIK.CHILD_WIDTHS),
        atMd: PropTypes.oneOf(UIK.CHILD_WIDTHS),
        atLg: PropTypes.oneOf(UIK.CHILD_WIDTHS),
        atXl: PropTypes.oneOf(UIK.CHILD_WIDTHS),
      }),
    ]),
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

  static asPropType = PropTypes.oneOfType([
    PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
    PropTypes.element,
    PropTypes.func,
  ]);

  static defaultProps = {
    ...BaseElement.defaultProps,
    childWidth: null,
    column: null,
    dynamic: false,
    firstColumn: null,
    nextRow: null,
    padding: false,
    position: null,
    textAlign: null,
  };

  static getElementProps(props) {
    const {
      baseAttributes,
      baseClasses,
      baseStyle,
      unhandledProps,
    } = BaseElement.getBaseProps(props);

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
    const isCentered = horizProp === 'center' && vertProp === 'center';

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
        [buildClassName('column', 'divider')]: get(column, 'divider', false),
        [buildClassName('position', vertProp, horizProp)]: !isCentered,
        [buildClassName('position', 'center')]: isCentered,
      },
    );

    const hasMarginAttribute = dynamic || firstColumn || nextRow;

    const marginComponentOptions = getOptionsString({
      firstColumn: firstColumn || 'uk-first-column',
      margin: buildClassName(
        'margin',
        get(nextRow, 'spacing', 'small'),
        get(nextRow, 'location', 'top'),
      ),
    });

    return {
      inheritedAttributes: {
        ...baseAttributes,
        'data-uk-margin': hasMarginAttribute
          ? marginComponentOptions
          : undefined,
      },
      inheritedClasses: trim(classes),
      inheritedStyle: baseStyle,
      unhandledProps: rest,
    };
  }

  getInheritedProps(props) {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = BlockElement.getElementProps(props);

    return {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    };
  }

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const { children, className = '', ...rest } = unhandledProps;
    const classes = classnames(className, inheritedClasses);
    const Element = getElementType(BlockElement, this.props);
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
