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
import Base from './Base';

export default class Block extends Base {
  static meta = {
    name: 'Block',
  };

  static propTypes = {
    ...Base.propTypes,
    as: PropTypes.oneOfType([
      PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
      PropTypes.func,
      PropTypes.element,
    ]),
    children: PropTypes.node,
    className: PropTypes.string,
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
      baseClasses,
      baseStyle,
      unhandledProps,
    } = this.getBaseElements(props);

    const {
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
        [buildClassName('position', vertProp, horizProp)]: (!isCentered),
        [buildClassName('position', 'center')]: (isCentered),
      },
    );

    const hasMarginAttribute = ((dynamic === true) || !isNil(firstColumn) || !isNil(nextRow));

    const marginAttributeOptions = getOptionsString({
      firstColumn: firstColumn || 'uk-first-column',
      margin: buildClassName(
        'margin',
        get(nextRow, 'spacing', 'small'),
        get(nextRow, 'location', 'top'),
      ),
    });

    return {
      attributes: {
        'data-uk-margin': (hasMarginAttribute) ? marginAttributeOptions : undefined,
      },
      blockClasses: trim(classes),
      blockStyle: baseStyle,
      unhandledProps: rest,
    };
  }

  render() {
    const {
      unhandledProps,
      blockClasses,
      blockStyle,
      attributes,
    } = this.getBlockElements(this.props);

    const {
      as,
      children,
      className,
      ...rest
    } = unhandledProps;

    const classes = classnames(className, blockClasses);

    const Element = getElementType(Block, this.props);
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
