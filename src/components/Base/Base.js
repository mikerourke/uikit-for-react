import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, isNil, trim, without } from 'lodash';
import {
  buildClassName,
  UIK,
} from '../../lib';

export default class Base extends React.Component {
  static propTypes = {
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.shape({
        name: PropTypes.oneOf(UIK.ANIMATIONS),
        reverse: PropTypes.bool,
        fast: PropTypes.bool,
        transformCenter: PropTypes.bool,
        transformOrigin: PropTypes.shape({
          horizontal: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS).isRequired,
          vertical: PropTypes.oneOf(UIK.VERTICAL_POSITIONS).isRequired,
        }),
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
      PropTypes.oneOf(UIK.SIZES),
      PropTypes.shape({
        size: PropTypes.oneOf(UIK.SIZES),
        hoverSize: PropTypes.oneOf(UIK.SIZES),
        bottom: PropTypes.bool,
      }),
    ]),
    clearfix: PropTypes.bool,
    display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
    float: PropTypes.oneOf(['left', 'right']),
    height: PropTypes.oneOf(['full', ...without(UIK.SIZES, 'xlarge')]),
    heightMax: PropTypes.oneOf(without(UIK.SIZES, 'xlarge')),
    hidden: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(UIK.BREAKPOINTS),
    ]),
    inline: PropTypes.bool,
    inverse: PropTypes.oneOf(['dark', 'light']),
    invisible: PropTypes.bool,
    margin: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf([...UIK.LOCATIONS, ...UIK.SPACING_MODIFIERS, 'grid']),
      PropTypes.shape({
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
      }),
    ]),
    overflow: PropTypes.oneOf(['auto', 'hidden']),
    resize: PropTypes.oneOf([true, 'vertical']),
    responsive: PropTypes.oneOf([false, 'height', 'width']),
    visible: PropTypes.oneOf(UIK.BREAKPOINTS),
    width: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.BASE_WIDTHS),
      PropTypes.shape({
        atSm: PropTypes.oneOf(UIK.BASE_WIDTHS),
        atMd: PropTypes.oneOf(UIK.BASE_WIDTHS),
        atLg: PropTypes.oneOf(UIK.BASE_WIDTHS),
        atXl: PropTypes.oneOf(UIK.BASE_WIDTHS),
      }),
    ]),
  };

  static defaultProps = {
    clearfix: false,
    hidden: false,
    inline: false,
    invisible: false,
  };

  getBaseElements(props) {
    const {
      animation,
      background,
      border,
      boxShadow,
      clearfix,
      display,
      float,
      height,
      heightMax,
      hidden,
      inline,
      inverse,
      invisible,
      margin,
      overflow,
      resize,
      responsive,
      style = {},
      visible,
      width,
      ...unhandledProps
    } = props;

    const horizOrigin = get(animation, ['transformOrigin', 'horizontal']);
    const vertOrigin = get(animation, ['transformOrigin', 'vertical']);
    if (
      (!isNil(horizOrigin) && isNil(vertOrigin))
      || (isNil(horizOrigin) && !isNil(vertOrigin))
    ) {
      throw new Error(
        'You must specify both a horizontal and vertical property for transformOrigin in ' +
        'Animation.',
      );
    }

    if (!isNil(clearfix) && !isNil(float)) {
      throw new Error('You can only specify the "clearfix" prop or "float" prop, not both.');
    }

    const allMargins = get(margin, 'all');
    const marginClasses = (isNil(allMargins))
      ? [
        buildClassName('margin', get(margin, 'bottom'), 'bottom'),
        buildClassName('margin', get(margin, 'left'), 'left'),
        buildClassName('margin', get(margin, 'right'), 'right'),
        buildClassName('margin', get(margin, 'top'), 'top'),
      ]
      : UIK.LOCATIONS.map(location => buildClassName('margin', allMargins, location));

    const classes = classnames(
      marginClasses,
      buildClassName('animation', animation),
      buildClassName('background', background),
      buildClassName('background', 'blend', get(background, 'blendMode')),
      buildClassName('background', 'image', get(background, 'breakpoint')),
      buildClassName('background', get(background, 'color')),
      buildClassName('background', get(background, 'color')),
      buildClassName('background', get(background, 'size')),
      buildClassName('border', border),
      buildClassName('box', 'shadow', boxShadow),
      buildClassName('box', 'shadow', get(boxShadow, 'size')),
      buildClassName('box', 'shadow', 'hover', get(boxShadow, 'hoverSize')),
      buildClassName('display', display),
      buildClassName('float', float),
      buildClassName('height', 'max', heightMax),
      buildClassName('hidden', hidden),
      buildClassName(inverse),
      buildClassName('overflow', overflow),
      buildClassName('responsive', responsive),
      buildClassName('transform', 'origin', vertOrigin, horizOrigin),
      buildClassName('visible', visible),
      buildClassName('width', width),
      buildClassName('width', get(width, 'atSm'), '@s'),
      buildClassName('width', get(width, 'atMd'), '@m'),
      buildClassName('width', get(width, 'atLg'), '@l'),
      buildClassName('width', get(width, 'atXl'), '@xl'),
      {
        [buildClassName('animation', 'fast')]: (get(animation, 'fast', false)),
        [buildClassName('animation', 'reverse')]: (get(animation, 'reverse', false)),
        [buildClassName('animation', 'transform', 'center')]: (get(animation, 'transformCenter', false)),
        [buildClassName('background', 'fixed')]: (get(background, 'fixed', false)),
        [buildClassName('background', 'norepeat')]: (get(background, 'norepeat', false)),
        [buildClassName('box', 'shadow', 'bottom')]: (get(boxShadow, 'bottom', false)),
        [buildClassName('clearfix')]: (clearfix),
        [buildClassName('height', '1', '1')]: (height === 'full'),
        [buildClassName('height', height)]: (height !== 'full'),
        [buildClassName('inline')]: (inline),
        [buildClassName('invisible')]: (invisible),
        [buildClassName('margin')]: (margin === true),
        [buildClassName('preserve', 'width')]: (responsive === false),
        [buildClassName('resize')]: (resize),
      },
    );

    const imageUrl = get(background, 'imageUrl');
    const baseStyle = {
      ...style,
      backgroundImage: (isNil(imageUrl)) ? undefined : `url(${imageUrl})`,
    };

    return {
      baseClasses: trim(classes),
      baseStyle,
      unhandledProps,
    };
  }
}
