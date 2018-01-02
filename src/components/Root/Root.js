import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, isNull, keys, omit, without } from 'lodash';
import {
  ANIMATIONS,
  BACKGROUND_COLORS,
  BACKGROUND_SIZES,
  BASE_WIDTHS,
  BLEND_MODES,
  BREAKPOINTS,
  HORIZONTAL_POSITIONS,
  SIZES,
  SPACING_LOCATIONS,
  SPACING_MODIFIERS,
} from '../constants';
import {
  buildObjectOrValueClassNames,
  buildClassName,
  buildPositionClassNames,
  customPropTypes,
  getOptionsString,
} from '../../lib';

const getStyle = Symbol('getStyle');
const getAttributes = Symbol('getAttributes');

class Root extends React.Component {
  static propTypes = {
    align: PropTypes.shape({
      to: PropTypes.oneOf(HORIZONTAL_POSITIONS),
      breakpoints: PropTypes.shape({
        left: PropTypes.oneOf(BREAKPOINTS),
        right: PropTypes.oneOf(BREAKPOINTS),
      }),
    }),
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(ANIMATIONS),
      PropTypes.shape({
        name: PropTypes.oneOf(ANIMATIONS),
        reverse: PropTypes.bool,
        fast: PropTypes.bool,
        transformCenter: PropTypes.bool,
        transformOrigin: PropTypes.shape(customPropTypes.shapeForPosition),
      }),
    ]),
    background: PropTypes.oneOfType([
      PropTypes.oneOf(BACKGROUND_COLORS),
      PropTypes.shape({
        color: PropTypes.oneOf(BACKGROUND_COLORS),
        size: PropTypes.oneOf(BACKGROUND_SIZES),
        position: PropTypes.shape(customPropTypes.shapeForPosition),
        norepeat: PropTypes.bool,
        fixed: PropTypes.bool,
        breakpoint: PropTypes.oneOf(BREAKPOINTS),
        blend: PropTypes.oneOf(BLEND_MODES),
        imageUrl: PropTypes.string,
      }),
    ]),
    border: PropTypes.oneOf(['circle', 'rounded']),
    boxShadow: PropTypes.oneOfType([
      PropTypes.oneOf(SIZES),
      PropTypes.shape({
        size: PropTypes.oneOf(SIZES),
        hoverSize: PropTypes.oneOf(SIZES),
        bottom: PropTypes.bool,
      }),
    ]),
    clearfix: PropTypes.bool,
    display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
    drag: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        showIcon: PropTypes.bool,
        showOver: PropTypes.bool,
      }),
    ]),
    flex: PropTypes.shape({
      grow: PropTypes.oneOf(['auto', 'flex', 'none']),
      order: PropTypes.oneOfType([
        PropTypes.oneOf(['first', 'last']),
        customPropTypes.getForBreakpoints(PropTypes.oneOf(['first', 'last'])),
      ]),
    }),
    float: PropTypes.oneOf(['left', 'right']),
    height: PropTypes.oneOf(['full', ...without(SIZES, 'xlarge')]),
    hidden: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(BREAKPOINTS),
      PropTypes.shape({
        breakpoint: PropTypes.oneOf(BREAKPOINTS),
        hover: PropTypes.bool,
        touch: PropTypes.bool,
      }),
    ]),
    inline: PropTypes.oneOf([true, false, 'clip']),
    inverse: PropTypes.oneOf(['dark', 'light']),
    invisible: PropTypes.oneOf([true, false, 'hover']),
    margin: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(SPACING_LOCATIONS),
      PropTypes.oneOf(SPACING_MODIFIERS),
      PropTypes.shape({
        top: customPropTypes.forSpacingAtLocation,
        bottom: customPropTypes.forSpacingAtLocation,
        left: customPropTypes.forSpacingAtLocation,
        right: customPropTypes.forSpacingAtLocation,
        all: customPropTypes.forSpacingAtLocation,
      }),
    ]),
    marginContainer: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        firstColumn: PropTypes.string,
        nextRow: PropTypes.shape({
          location: PropTypes.oneOf(SPACING_LOCATIONS),
          modifier: PropTypes.oneOf(SPACING_MODIFIERS),
        }),
      }),
    ]),
    matchHeight: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        target: PropTypes.string,
        row: PropTypes.bool,
      }),
    ]),
    maxHeight: PropTypes.oneOf(without(SIZES, 'xlarge')),
    overflow: PropTypes.oneOf(['auto', 'hidden']),
    padding: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['large', 'small', 'remove']),
      PropTypes.shape({
        size: PropTypes.oneOf(['large', 'small']),
        removeTop: PropTypes.bool,
        removeBottom: PropTypes.bool,
        removeLeft: PropTypes.bool,
        removeRight: PropTypes.bool,
      }),
      PropTypes.shape({
        size: PropTypes.oneOf(['large', 'small']),
        removeVertical: PropTypes.bool,
        removeHorizontal: PropTypes.bool,
      }),
    ]),
    position: PropTypes.shape({
      ...customPropTypes.shapeForPosition,
      marginSize: PropTypes.oneOf(without(SIZES, 'xlarge')),
      cssClass: PropTypes.oneOf(['absolute', 'fixed', 'relative']),
      zIndexOfOne: PropTypes.bool,
    }),
    resize: PropTypes.oneOf([true, false, 'vertical']),
    viewportHeight: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        offsetTop: PropTypes.bool,
        offsetBottom: PropTypes.oneOfType([
          PropTypes.bool,
          PropTypes.number,
        ]),
        expand: PropTypes.bool,
      }),
    ]),
    visible: PropTypes.oneOfType([
      PropTypes.oneOf(BREAKPOINTS),
      PropTypes.shape({
        breakpoint: PropTypes.oneOf(BREAKPOINTS),
        toggle: PropTypes.bool,
      }),
    ]),
    width: PropTypes.oneOfType([
      PropTypes.oneOf(BASE_WIDTHS),
      customPropTypes.getForBreakpoints(PropTypes.oneOf(BASE_WIDTHS)),
    ]),
  };

  getRootClassNames() {
    const {
      align,
      animation,
      background,
      border,
      boxShadow,
      clearfix,
      display,
      drag,
      flex,
      float,
      height,
      hidden,
      inline,
      inverse,
      invisible,
      margin,
      maxHeight,
      overflow,
      padding,
      position,
      resize,
      visible,
      width,
    } = this.props;

    const marginAllProp = get(margin, 'all', null);
    const marginClassNames = (isNull(marginAllProp))
      ? buildObjectOrValueClassNames('margin', margin)
      : SPACING_LOCATIONS.map(location => buildClassName('margin', marginAllProp, location));

    return classnames(
      buildClassName('align', get(align, 'to')),
      buildClassName('align', 'left', get(align, ['breakpoints', 'left'])),
      buildClassName('align', 'right', get(align, ['breakpoints', 'right'])),
      buildClassName('animation', animation),
      buildClassName('animation', get(animation, 'name')),
      buildClassName('animation', 'reverse', get(animation, 'reverse')),
      buildClassName('animation', 'fast', get(animation, 'fast')),
      buildClassName('transform', 'center', get(animation, 'transformCenter')),
      buildPositionClassNames(
        'transform-origin',
        get(animation, 'transformOrigin'),
        { omitCenter: true },
      ),
      buildClassName('background', background),
      buildClassName('background', get(background, 'color')),
      buildClassName('background', get(background, 'size')),
      buildPositionClassNames('background', get(background, 'position')),
      buildClassName('background', 'norepeat', get(background, 'norepeat')),
      buildClassName('background', 'fixed', get(background, 'fixed')),
      buildClassName('background', 'image', get(background, 'breakpoint')),
      buildClassName('border', border),
      buildClassName('box', 'shadow', boxShadow),
      buildClassName('box', 'shadow', get(boxShadow, 'size')),
      buildClassName('box', 'shadow', 'hover', get(boxShadow, 'hoverSize')),
      buildClassName('box', 'shadow', 'bottom', get(boxShadow, 'bottom')),
      buildClassName('clearfix', clearfix),
      buildClassName('display', display),
      buildClassName('drag', drag),
      buildClassName('drag', get(drag, 'showIcon')),
      buildClassName('dragover', get(drag, 'showOver')),
      buildClassName('flex', get(flex, 'grow')),
      buildClassName('flex', get(flex, 'order')),
      buildObjectOrValueClassNames('flex', get(flex, 'order')),
      buildClassName('float', float),
      buildClassName((height === 'full') ? ['height', '1', '1'] : ['height', height]),
      buildClassName('hidden', hidden),
      buildClassName('hidden', get(hidden, 'breakpoint')),
      buildClassName('hidden', 'hover', get(hidden, 'hover')),
      buildClassName('hidden', 'touch', (get(hidden, 'touch') === true)),
      buildClassName('hidden', 'notouch', (get(hidden, 'touch') === false)),
      buildClassName('inline', inline),
      buildClassName(inverse),
      buildClassName('invisible', invisible),
      marginClassNames,
      buildClassName('height', 'max', maxHeight),
      buildClassName('overflow', overflow),
      buildObjectOrValueClassNames('padding', padding),
      buildPositionClassNames('position', position),
      buildClassName('resize', resize),
      buildClassName('visible', visible),
      buildClassName('visible', get(visible, 'breakpoint')),
      buildClassName('visible', 'toggle', get(visible, 'toggle')),
      buildClassName('width', width),
      buildObjectOrValueClassNames('width', width),
    ).trim();
  }

  [getStyle]() {
    const imageUrl = get(this.props, ['background', 'imageUrl'], '');
    const currentStyle = get(this.props, 'style', {});
    return (imageUrl !== '')
      ? { ...currentStyle, backgroundImage: `url(${imageUrl})` }
      : { ...currentStyle };
  }

  [getAttributes]() {
    const marginContainerProps = this.props.marginContainer;
    const marginContainerOptions = getOptionsString({
      margin: buildClassName(
        'margin',
        get(marginContainerProps, ['nextRow', 'modifier'], 'small'),
        get(marginContainerProps, ['nextRow', 'location'], 'top'),
      ),
      firstColumn: buildClassName(get(marginContainerProps, 'firstColumn', 'uk-first-column')),
    });

    return {
      'data-uk-height-viewport': getOptionsString(this.props.viewportHeight),
      'data-uk-height-match': getOptionsString(this.props.matchHeight),
      'data-uk-margin': (marginContainerProps ? marginContainerOptions : undefined),
    };
  }

  getValidProps(currentProps) {
    const style = this[getStyle]();
    const attributes = this[getAttributes]();
    const omittedPropNames = keys(Root.propTypes);
    const validProps = omit(currentProps, omittedPropNames);
    return {
      ...validProps,
      ...attributes,
      style,
    };
  }
}

export default Root;
