/* eslint-disable react/forbid-prop-types,prefer-rest-params */
import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import compact from 'lodash/compact';
import get from 'lodash/get';
import isBoolean from 'lodash/isBoolean';
import isEmpty from 'lodash/isEmpty';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import trim from 'lodash/trim';
import without from 'lodash/without';
import {
  buildBreakpointClasses,
  buildClassName,
  customPropTypes,
  getElementType,
  getOptionsString,
  getValidProps,
  HTML,
  UIK,
} from '../../lib';
import {
  animationProps,
  backgroundProps,
  flexProps,
  marginProps,
  positionProps,
  textProps,
} from '../common';

export default class Base extends React.Component {
  static displayName = 'Base';

  static propTypes = {
    alignTo: customPropTypes.forBreakpoints(UIK.HORIZONTAL_POSITIONS),
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.shape(animationProps.propTypes),
    ]),
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    background: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.BACKGROUND_COLORS),
      PropTypes.shape(backgroundProps.propTypes),
    ]),
    baseId: PropTypes.string,
    baseRef: PropTypes.element,
    border: PropTypes.oneOf(['circle', 'rounded']),
    boxShadow: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.GRID_SIZES),
      PropTypes.shape({
        size: PropTypes.oneOf(UIK.GRID_SIZES),
        hoverSize: PropTypes.oneOf(UIK.GRID_SIZES),
        bottom: PropTypes.bool,
      }),
    ]),
    childWidth: customPropTypes.forBreakpoints(UIK.CHILD_WIDTHS),
    className: PropTypes.string,
    clearfix: ExtraPropTypes.mutuallyExclusiveProps(
      PropTypes.bool,
      'clearfix',
      'float',
    ),
    component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
    flex: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape(flexProps.propTypes),
    ]),
    float: PropTypes.oneOf(['left', 'right']),
    forTarget: PropTypes.string,
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([...UIK.BASE_SIZES, 'full']),
    ]),
    heightMatch: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.shape({
        target: PropTypes.string,
        row: PropTypes.bool,
      }),
    ]),
    heightMax: PropTypes.oneOf(UIK.BASE_SIZES),
    hidden: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf([...UIK.BREAKPOINTS, 'hover']),
    ]),
    hoverTransition: PropTypes.oneOf(
      without(UIK.ANIMATIONS, 'kenburns', 'shake'),
    ),
    inline: PropTypes.bool,
    inverse: PropTypes.oneOf(['dark', 'light']),
    invisible: PropTypes.bool,
    itemIn: PropTypes.shape({
      parent: PropTypes.oneOf(['slideshow']).isRequired,
      index: PropTypes.number.isRequired,
    }),
    linkStyle: PropTypes.oneOf(['heading', 'muted', 'reset', 'text']),
    margin: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf([...UIK.LOCATIONS, ...UIK.SPACING_MODIFIERS, 'grid']),
      PropTypes.shape(marginProps.propTypes),
    ]),
    marker: PropTypes.bool,
    overflow: PropTypes.oneOf(['auto', 'hidden']),
    padding: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['large', 'small', 'remove']),
      PropTypes.shape({
        remove: PropTypes.oneOf([...UIK.AREAS, ...UIK.LOCATIONS]),
        size: PropTypes.oneOf(['large', 'small']),
      }),
    ]),
    parallax: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.shape({
        x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        bgx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        bgy: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        rotate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        scale: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        backgroundColor: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
        ]),
        borderColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        blur: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        hue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        grayscale: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        invert: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        saturate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        sepia: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        easing: PropTypes.number,
        media: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        target: PropTypes.string,
        viewport: PropTypes.number,
      }),
    ]),
    placeholder: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]),
    position: PropTypes.oneOfType([
      positionProps.propTypes.at,
      PropTypes.shape(positionProps.propTypes),
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
    style: PropTypes.object,
    text: PropTypes.shape(textProps.propTypes),
    textAlign: customPropTypes.forBreakpoints(
      UIK.HORIZONTAL_POSITIONS,
      PropTypes.oneOf(['justify']),
    ),
    toggleFor: PropTypes.oneOf(['animation', 'transition', 'visibility']),
    transformCenter: PropTypes.bool,
    viewport: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        expand: PropTypes.bool,
        minHeight: PropTypes.number,
        offsetBottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
        offsetTop: PropTypes.bool,
      }),
    ]),
    visible: PropTypes.oneOf(UIK.BREAKPOINTS),
    width: customPropTypes.forBreakpoints(UIK.ALL_WIDTHS, PropTypes.number),
  };

  static defaultProps = {
    className: '',
    parallax: {},
    style: {},
  };

  getComponentAttributes = ({
    heightMatch,
    itemIn,
    marker,
    overflow,
    parallax,
    viewport,
  } = {}) => {
    const validOptions = compact(Object.values(...arguments));
    if (validOptions.length === 0) return {};

    const itemInName = buildClassName(get(itemIn, 'parent'), 'item');
    const itemInIndex = get(itemIn, 'index');

    let heightMatchOptions = heightMatch;
    if (isPlainObject(heightMatch)) {
      heightMatchOptions = getOptionsString({
        target: get(heightMatch, 'target'),
        row: get(heightMatch, 'row'),
      });
    }

    const parallaxTarget = get(parallax, 'target');
    const parallaxOptions = getOptionsString({
      ...parallax,
      target: parallaxTarget
        ? `[data-for-target="${parallaxTarget}"]`
        : undefined,
    });

    return {
      [itemInName]: itemInIndex,
      'uk-marker': marker ? '' : undefined,
      'uk-height-match': heightMatch ? heightMatchOptions : undefined,
      'uk-height-viewport': viewport ? getOptionsString(viewport) : undefined,
      'uk-overflow-auto': overflow === 'auto' ? '' : undefined,
      'uk-overflow-hidden': overflow === 'hidden' ? '' : undefined,
      'uk-parallax': isEmpty(parallax) ? undefined : parallaxOptions,
    };
  };

  render() {
    const {
      alignTo,
      animation,
      as,
      background,
      baseId,
      baseRef,
      border,
      boxShadow,
      childWidth,
      className,
      clearfix,
      component,
      display,
      flex,
      float,
      forTarget,
      height,
      heightMatch,
      heightMax,
      hidden,
      hoverTransition,
      inline,
      inverse,
      invisible,
      itemIn,
      linkStyle,
      margin,
      marker,
      overflow,
      padding,
      parallax,
      placeholder,
      position,
      resize,
      responsive,
      sortableHandle,
      style,
      text,
      textAlign,
      toggleFor,
      transformCenter,
      viewport,
      visible,
      width,
      ...rest
    } = this.props;

    const customHeight = [...UIK.BASE_SIZES, 'full'].includes(height);
    const customWidth = UIK.ALL_WIDTHS.includes(width) || isPlainObject(width);

    const ukClasses = classnames(
      animationProps.extrapolateClasses(animation),
      backgroundProps.extrapolateClasses(background),
      flexProps.extrapolateClasses(flex),
      marginProps.extrapolateClasses(margin),
      positionProps.extrapolateClasses(position),
      textProps.extrapolateClasses(text),
      buildBreakpointClasses('align', alignTo),
      buildClassName('border', border),
      buildClassName('box-shadow', boxShadow),
      buildClassName('box-shadow', get(boxShadow, 'size')),
      buildClassName('box-shadow-hover', get(boxShadow, 'hoverSize')),
      buildBreakpointClasses('child-width', childWidth),
      buildClassName('display', display),
      buildClassName('height-max', heightMax),
      buildClassName('hidden', hidden),
      buildClassName(inverse),
      buildClassName('float', float),
      buildClassName('link', linkStyle),
      buildClassName('overflow', overflow),
      buildClassName('padding', padding),
      buildClassName('padding', get(padding, 'size')),
      buildClassName('padding-remove', get(padding, 'remove')),
      buildClassName('responsive', responsive),
      buildBreakpointClasses('text', textAlign),
      buildClassName('transition', hoverTransition),
      buildClassName('visible', visible),
      {
        [sortableHandle]: isString(sortableHandle),
        [buildBreakpointClasses('width', width)]: customWidth,
        [buildClassName('height', height)]: customHeight
          ? height !== 'full'
          : false,
        'uk-box-shadow-bottom': get(boxShadow, 'bottom', false),
        'uk-clearfix': clearfix,
        'uk-height-1-1': height === 'full',
        'uk-inline': inline,
        'uk-invisible': invisible,
        'uk-placeholder': placeholder === true,
        'uk-preserve-width': responsive === false,
        'uk-resize': resize,
        'uk-sorable-handle': sortableHandle === true,
        'uk-animation-toggle': toggleFor === 'animation',
        'uk-transition-toggle': toggleFor === 'transition',
        'uk-visible-toggle': toggleFor === 'visibility',
        'uk-transform-center': transformCenter,
      },
    );

    const attributes = this.getComponentAttributes({
      heightMatch,
      itemIn,
      marker,
      overflow,
      parallax,
      viewport,
    });
    const classes = classnames(className, trim(ukClasses));
    const styles = backgroundProps.extrapolateStyle(background, style);

    const componentForElement = component || Base;
    const Element = getElementType(componentForElement, as);

    return (
      <Element
        className={classes || undefined}
        style={isEmpty(styles) ? undefined : styles}
        height={customHeight ? undefined : height}
        width={customWidth ? undefined : width}
        tabIndex={toggleFor === 'transition' ? 0 : undefined}
        {...attributes}
        {...getValidProps(componentForElement, rest)}
        id={baseId}
        ref={baseRef}
        placeholder={isBoolean(placeholder) ? undefined : placeholder}
        data-for-target={forTarget}
      />
    );
  }
}
