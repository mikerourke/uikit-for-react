import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { get, isNil, isPlainObject, isString, trim, without } from 'lodash';
import { buildClassName, getOptionsString, UIK } from '../../lib';

export default class RootElement extends React.Component {
  static propTypes = {
    alignItems: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.shape({
        name: PropTypes.oneOf(UIK.ANIMATIONS),
        reverse: PropTypes.bool,
        fast: PropTypes.bool,
        transformCenter: PropTypes.bool,
        transformOrigin: ExtraPropTypes.and([
          PropTypes.shape({
            horizontal: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS).isRequired,
            vertical: PropTypes.oneOf(UIK.VERTICAL_POSITIONS).isRequired,
          }),
          props => {
            const { horizontal = null, vertical = null } = get(
              props,
              ['animation', 'transformOrigin'],
              {},
            );
            if ((horizontal && !vertical) || (!horizontal && vertical)) {
              return new Error(
                'You must specify both a horizontal and vertical property for transformOrigin in animation prop',
              );
            }
            return null;
          },
        ]),
      }),
    ]),
    background: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.BACKGROUND_COLORS),
      PropTypes.shape({
        blendMode: PropTypes.oneOf(UIK.BLEND_MODES),
        breakpoint: PropTypes.oneOf(UIK.BREAKPOINTS),
        color: PropTypes.oneOf(UIK.BACKGROUND_COLORS),
        fixed: PropTypes.bool,
        imageUrl: PropTypes.string,
        norepeat: PropTypes.bool,
        position: PropTypes.shape({
          horizontal: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
          vertical: PropTypes.oneOf(UIK.VERTICAL_POSITIONS),
        }),
        size: PropTypes.oneOf(UIK.BACKGROUND_SIZES),
      }),
    ]),
    border: PropTypes.oneOf(['circle', 'rounded']),
    boxShadow: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.GRID_SIZES),
      PropTypes.shape({
        size: PropTypes.oneOf(UIK.GRID_SIZES),
        hoverSize: PropTypes.oneOf(UIK.GRID_SIZES),
        bottom: PropTypes.bool,
      }),
    ]),
    clearfix: ExtraPropTypes.mutuallyExclusiveProps(
      PropTypes.bool,
      'clearfix',
      'float',
    ),
    direction: PropTypes.shape({
      as: PropTypes.oneOf(['column', 'row']),
      reverse: PropTypes.bool,
    }),
    display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
    flex: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['inline'])]),
    float: PropTypes.oneOf(['left', 'right']),
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([...UIK.BASE_SIZES, 'full']),
    ]),
    heightMax: PropTypes.oneOf(UIK.BASE_SIZES),
    hidden: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf([...UIK.BREAKPOINTS, 'hover']),
    ]),
    hoverTransition: PropTypes.oneOf(
      without(UIK.ANIMATIONS, ['kenburns', 'shake']),
    ),
    inline: PropTypes.bool,
    inverse: PropTypes.oneOf(['dark', 'light']),
    invisible: PropTypes.bool,
    justifyContent: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
      PropTypes.shape({
        atSm: PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
        atMd: PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
        atLg: PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
        atXl: PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
      }),
    ]),
    linkStyle: PropTypes.oneOf(['muted', 'text']),
    margin: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf([...UIK.LOCATIONS, ...UIK.SPACING_MODIFIERS, 'grid']),
      PropTypes.shape({
        adjacent: PropTypes.oneOf(['remove']),
        all: PropTypes.oneOfType([
          PropTypes.bool,
          PropTypes.oneOf(UIK.SPACING_MODIFIERS),
        ]),
        bottom: PropTypes.oneOfType([
          PropTypes.bool,
          PropTypes.oneOf(UIK.SPACING_MODIFIERS),
        ]),
        left: PropTypes.oneOfType([
          PropTypes.bool,
          PropTypes.oneOf(UIK.SPACING_MODIFIERS),
        ]),
        right: PropTypes.oneOfType([
          PropTypes.bool,
          PropTypes.oneOf(UIK.SPACING_MODIFIERS),
        ]),
        top: PropTypes.oneOfType([
          PropTypes.bool,
          PropTypes.oneOf(UIK.SPACING_MODIFIERS),
        ]),
        vertical: PropTypes.oneOfType([
          PropTypes.bool,
          PropTypes.oneOf(['auto', 'remove']),
        ]),
      }),
    ]),
    marker: PropTypes.bool,
    order: PropTypes.oneOfType([
      PropTypes.oneOf(['first', 'last']),
      PropTypes.shape({
        first: PropTypes.oneOf(UIK.BREAKPOINTS),
        last: PropTypes.oneOf(UIK.BREAKPOINTS),
      }),
    ]),
    overflow: PropTypes.oneOf(['auto', 'hidden']),
    parallax: PropTypes.shape({
      animate: PropTypes.object,
      easing: PropTypes.number,
      media: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      target: PropTypes.string,
      viewport: PropTypes.number,
    }),
    position: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.LOCATIONS),
      PropTypes.oneOf(UIK.CSS_POSITIONS),
      PropTypes.shape({
        horizontal: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        vertical: PropTypes.oneOf(UIK.VERTICAL_POSITIONS),
        cover: PropTypes.bool,
        marginSize: PropTypes.oneOf(UIK.BASE_SIZES),
        outside: PropTypes.oneOf(['left', 'right']),
        type: PropTypes.oneOf(UIK.CSS_POSITIONS),
        zIndexOfOne: PropTypes.bool,
      }),
    ]),
    resize: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['vertical']),
    ]),
    responsive: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['height', 'width']),
    ]),
    sortableHandle: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    sorted: PropTypes.bool,
    transformCenter: PropTypes.bool,
    visible: PropTypes.oneOf(UIK.BREAKPOINTS),
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(UIK.ALL_WIDTHS),
      PropTypes.shape({
        default: PropTypes.oneOf(UIK.ALL_WIDTHS),
        atSm: PropTypes.oneOf(UIK.ALL_WIDTHS),
        atMd: PropTypes.oneOf(UIK.ALL_WIDTHS),
        atLg: PropTypes.oneOf(UIK.ALL_WIDTHS),
        atXl: PropTypes.oneOf(UIK.ALL_WIDTHS),
      }),
    ]),
    wrap: PropTypes.shape({
      type: PropTypes.oneOf(['nowrap', 'reverse', 'wrap']),
      alignment: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),
    }),
  };

  static defaultProps = {
    clearfix: false,
    flex: false,
    hidden: false,
    inline: false,
    invisible: false,
    margin: false,
    marker: false,
    resize: false,
    sortableHandle: false,
    sorted: false,
    transformCenter: false,
  };

  static getRootProps(props) {
    const {
      alignItems,
      animation,
      background,
      border,
      boxShadow,
      clearfix,
      direction,
      display,
      flex,
      float,
      height,
      heightMax,
      hidden,
      hoverTransition,
      inline,
      inverse,
      invisible,
      justifyContent,
      linkStyle,
      margin,
      marker,
      order,
      overflow,
      parallax,
      position,
      resize,
      responsive,
      sortableHandle,
      sorted,
      style = {},
      transformCenter,
      visible,
      text,
      utility,
      width,
      wrap,
      ...unhandledProps
    } = props;

    const horizProp = get(position, 'horizontal');
    const vertProp = get(position, 'vertical');
    const isCentered = horizProp === 'center' && vertProp === 'center';

    const horizOrigin = get(animation, ['transformOrigin', 'horizontal']);
    const vertOrigin = get(animation, ['transformOrigin', 'vertical']);

    const allMargins = get(margin, 'all');
    let marginClasses = isNil(allMargins)
      ? [
          buildClassName('margin', get(margin, 'adjacent'), 'adjacent'),
          buildClassName('margin', get(margin, 'bottom'), 'bottom'),
          buildClassName('margin', get(margin, 'left'), 'left'),
          buildClassName('margin', get(margin, 'right'), 'right'),
          buildClassName('margin', get(margin, 'top'), 'top'),
          buildClassName('margin', get(margin, 'vertical'), 'vertical'),
        ]
      : UIK.LOCATIONS.map(location =>
          buildClassName('margin', allMargins, location),
        );
    if (margin === true) marginClasses = buildClassName('margin');

    const customHeight = [...UIK.BASE_SIZES, 'full'].includes(height);
    const customWidth = UIK.ALL_WIDTHS.includes(width) || isPlainObject(width);
    const widthClasses = customWidth
      ? classnames(
          buildClassName('width', width),
          buildClassName('width', get(width, 'default')),
          buildClassName('width', get(width, 'atSm'), '@s'),
          buildClassName('width', get(width, 'atMd'), '@m'),
          buildClassName('width', get(width, 'atLg'), '@l'),
          buildClassName('width', get(width, 'atXl'), '@xl'),
        )
      : '';

    const classes = classnames(
      marginClasses,
      widthClasses,
      buildClassName('animation', animation),
      buildClassName('background', background),
      buildClassName('background', 'blend', get(background, 'blendMode')),
      buildClassName('background', 'image', get(background, 'breakpoint')),
      buildClassName('background', get(background, 'color')),
      buildClassName('background', get(background, 'size')),
      buildClassName('border', border),
      buildClassName('box', 'shadow', boxShadow),
      buildClassName('box', 'shadow', get(boxShadow, 'size')),
      buildClassName('box', 'shadow', 'hover', get(boxShadow, 'hoverSize')),
      buildClassName(
        'flex',
        get(direction, 'as'),
        get(direction, 'reverse', false) ? 'reverse' : '',
      ),
      buildClassName('display', display),
      buildClassName('float', float),
      buildClassName('height', 'max', heightMax),
      buildClassName('hidden', hidden),
      buildClassName(inverse),
      buildClassName('flex', alignItems),
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
      buildClassName('link', linkStyle),
      buildClassName('overflow', overflow),
      buildClassName('position', position),
      buildClassName('position', 'center', get(position, 'outside'), 'out'),
      buildClassName('position', 'cover', get(position, 'cover')),
      buildClassName('position', 'z', 'index', get(position, 'zIndexOfOne')),
      buildClassName('position', get(position, 'marginSize')),
      buildClassName('position', get(position, 'type')),
      buildClassName('responsive', responsive),
      buildClassName('transform', 'origin', vertOrigin, horizOrigin),
      buildClassName('transition', hoverTransition),
      buildClassName('visible', visible),
      {
        [sortableHandle]: isString(sortableHandle),
        [buildClassName('animation', 'fast')]: get(animation, 'fast', false),
        [buildClassName('animation', 'reverse')]: get(
          animation,
          'reverse',
          false,
        ),
        [buildClassName('animation', 'transform', 'center')]: get(
          animation,
          'transformCenter',
          false,
        ),
        [buildClassName('background', 'fixed')]: get(
          background,
          'fixed',
          false,
        ),
        [buildClassName('background', 'norepeat')]: get(
          background,
          'norepeat',
          false,
        ),
        [buildClassName('box', 'shadow', 'bottom')]: get(
          boxShadow,
          'bottom',
          false,
        ),
        [buildClassName('clearfix')]: clearfix,
        [buildClassName('flex')]: flex === true,
        [buildClassName('flex', 'inline')]: flex === 'inline',
        [buildClassName('grid', 'margin')]: margin === 'grid',
        [buildClassName('height', '1', '1')]: height === 'full',
        [buildClassName('height', height)]: customHeight
          ? height !== 'full'
          : false,
        [buildClassName('inline')]: inline,
        [buildClassName('invisible')]: invisible,
        [buildClassName('margin', margin)]:
          isString(margin) && margin !== 'grid',
        [buildClassName('position', vertProp, horizProp)]: !isCentered,
        [buildClassName('position', 'center')]: isCentered,
        [buildClassName('preserve', 'width')]: responsive === false,
        [buildClassName('resize')]: resize,
        [buildClassName('sortable', 'handle')]: sortableHandle === true,
        [buildClassName('transform', 'center')]: transformCenter,
      },
    );

    const imageUrl = get(background, 'imageUrl');
    const baseStyle = {
      ...style,
      backgroundImage: isNil(imageUrl) ? undefined : `url(${imageUrl})`,
    };

    const { animate = {}, ...parallaxProps } = get(this.props, 'parallax', {});
    const parallaxOptions = getOptionsString({
      ...animate,
      ...parallaxProps,
    });

    return {
      baseAttributes: {
        'uk-marker': marker ? '' : undefined,
        'data-uk-overflow-auto': overflow === 'auto' ? '' : undefined,
        'data-uk-overflow-hidden': overflow === 'hidden' ? '' : undefined,
        'data-uk-parallax': parallax ? parallaxOptions : undefined,
      },
      baseClasses: trim(classes),
      baseStyle,
      unhandledProps: {
        ...unhandledProps,
        height: customHeight ? undefined : height,
        width: customWidth ? undefined : text,
      },
    };
  }
}
