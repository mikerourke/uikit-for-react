/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
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

const marginSpacingPropType = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.oneOf(UIK.SPACING_MODIFIERS),
]);

export default class Base extends React.Component {
  static displayName = 'Base';

  static propTypes = {
    alignItems: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),
    alignTo: customPropTypes.forBreakpoints(UIK.HORIZONTAL_POSITIONS),
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.shape({
        name: PropTypes.oneOf(UIK.ANIMATIONS),
        reverse: PropTypes.bool,
        fast: PropTypes.bool,
        transformCenter: PropTypes.bool,
        transformOrigin: PropTypes.oneOf(UIK.X_Y_POSITIONS),
      }),
    ]),
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    background: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.BACKGROUND_COLORS),
      PropTypes.shape({
        blendMode: PropTypes.oneOf(UIK.BLEND_MODES),
        breakpoint: PropTypes.oneOf(UIK.BREAKPOINTS),
        color: PropTypes.oneOf(UIK.BACKGROUND_COLORS),
        fixed: PropTypes.bool,
        imageUrl: PropTypes.string,
        norepeat: PropTypes.bool,
        position: PropTypes.oneOf(UIK.X_Y_POSITIONS),
        size: PropTypes.oneOf(UIK.BACKGROUND_SIZES),
      }),
    ]),
    baseId: PropTypes.string,
    baseRef: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.element,
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
    childWidth: customPropTypes.forBreakpoints(UIK.CHILD_WIDTHS),
    className: PropTypes.string,
    clearfix: ExtraPropTypes.mutuallyExclusiveProps(
      PropTypes.bool,
      'clearfix',
      'float',
    ),
    column: customPropTypes.forBreakpoints(
      UIK.BASE_WIDTHS,
      PropTypes.shape({
        width: PropTypes.oneOf(UIK.BASE_WIDTHS),
        divider: PropTypes.bool,
      }),
      { divider: PropTypes.bool },
    ),
    columnSpan: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    direction: PropTypes.shape({
      as: PropTypes.oneOf(['column', 'row']),
      reverse: PropTypes.bool,
    }),
    display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
    flex: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['inline'])]),
    float: PropTypes.oneOf(['left', 'right']),
    grow: PropTypes.oneOf(['auto', 'full', 'none']),
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
    itemIn: PropTypes.shape({
      parent: PropTypes.oneOf(['slideshow']).isRequired,
      index: PropTypes.number.isRequired,
    }),
    justifyContent: customPropTypes.forBreakpoints(
      UIK.FLEX_HORIZONTAL_MODIFIERS,
    ),
    linkStyle: PropTypes.oneOf(['muted', 'text']),
    margin: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf([...UIK.LOCATIONS, ...UIK.SPACING_MODIFIERS, 'grid']),
      PropTypes.shape({
        adjacent: PropTypes.oneOf(['remove']),
        all: marginSpacingPropType,
        bottom: marginSpacingPropType,
        left: marginSpacingPropType,
        right: marginSpacingPropType,
        top: marginSpacingPropType,
        vertical: PropTypes.oneOfType([
          PropTypes.bool,
          PropTypes.oneOf(['auto', 'remove']),
        ]),
      }),
    ]),
    marker: PropTypes.bool,
    nextRow: PropTypes.shape({
      spacing: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
      location: PropTypes.oneOf(UIK.LOCATIONS),
    }),
    order: PropTypes.oneOfType([
      PropTypes.oneOf(['first', 'last']),
      PropTypes.shape({
        first: PropTypes.oneOf(UIK.BREAKPOINTS),
        last: PropTypes.oneOf(UIK.BREAKPOINTS),
      }),
    ]),
    overflow: PropTypes.oneOf(['auto', 'hidden']),
    padding: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['large', 'small', 'remove']),
      PropTypes.shape({
        remove: PropTypes.oneOf([...UIK.AREAS, ...UIK.LOCATIONS]),
        size: PropTypes.oneOf(['large', 'small']),
      }),
    ]),
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
        at: PropTypes.oneOf([...UIK.X_Y_POSITIONS, 'center-center']),
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
    scrollspyNav: PropTypes.shape({
      clsActive: PropTypes.string,
      offset: PropTypes.number,
      onItemActive: PropTypes.func,
      overflow: PropTypes.bool,
      scroll: PropTypes.bool,
    }),
    sortableHandle: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    style: PropTypes.object,
    text: PropTypes.shape({
      align: PropTypes.oneOfType([
        PropTypes.oneOf(['justify']),
        customPropTypes.forBreakpoints(UIK.HORIZONTAL_POSITIONS),
      ]),
      bold: PropTypes.bool,
      danger: PropTypes.bool,
      large: PropTypes.bool,
      lead: PropTypes.bool,
      meta: PropTypes.bool,
      muted: PropTypes.bool,
      primary: PropTypes.bool,
      small: PropTypes.bool,
      success: PropTypes.bool,
      transform: PropTypes.oneOf(['capitalize', 'lowercase', 'uppercase']),
      verticalAlign: PropTypes.oneOf(['baseline', 'top', 'middle', 'bottom']),
      warning: PropTypes.bool,
      wrapping: PropTypes.oneOf(['break', 'nowrap', 'truncate']),
    }),
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
    wrap: PropTypes.shape({
      type: PropTypes.oneOf(['nowrap', 'reverse', 'wrap']),
      alignment: PropTypes.oneOf([
        ...UIK.FLEX_VERTICAL_MODIFIERS,
        'around',
        'between',
      ]),
    }),
  };

  static defaultProps = {
    className: '',
    clearfix: false,
    flex: false,
    hidden: false,
    inline: false,
    invisible: false,
    margin: false,
    marker: false,
    padding: false,
    parallax: {},
    resize: false,
    sortableHandle: false,
    style: {},
    transformCenter: false,
  };

  getAnimationClasses(animation) {
    return classnames(
      buildClassName('animation', animation),
      buildClassName('animation', get(animation, 'name')),
      buildClassName('transform-origin', get(animation, 'transformOrigin')),
      {
        'uk-animation-fast': get(animation, 'fast', false),
        'uk-animation-reverse': get(animation, 'reverse', false),
        'uk-animation-transform-center': get(
          animation,
          'transformCenter',
          false,
        ),
      },
    );
  }

  getBackgroundClasses(background) {
    return classnames(
      buildClassName('background', background),
      buildClassName('background-blend', get(background, 'blendMode')),
      buildClassName('background-image', get(background, 'breakpoint')),
      buildClassName('background', get(background, 'color')),
      buildClassName('background', get(background, 'size')),
      {
        'uk-background-fixed': get(background, 'fixed', false),
        'uk-background-norepeat': get(background, 'norepeat', false),
      },
    );
  }

  getFlexClasses(
    alignItems,
    direction,
    flex,
    grow,
    justifyContent,
    order,
    wrap,
  ) {
    return classnames(
      buildClassName('flex', alignItems),
      buildClassName(
        'flex',
        get(direction, 'as'),
        get(direction, 'reverse', false) ? 'reverse' : '',
      ),
      buildBreakpointClasses('flex', justifyContent),
      buildClassName('flex', order),
      buildClassName('flex-first', get(order, 'first')),
      buildClassName('flex-last', get(order, 'last')),
      buildClassName('flex', get(wrap, 'type')),
      buildClassName('flex', get(wrap, 'alignment')),
      {
        'uk-flex': flex === true,
        'uk-flex-inline': flex === 'inline',
        'uk-flex-1': grow === 'full',
      },
    );
  }

  getMarginClasses(margin) {
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
    if (margin === true) marginClasses = 'uk-margin';
    return classnames(marginClasses, {
      [buildClassName('margin', margin)]: isString(margin) && margin !== 'grid',
      'uk-grid-margin': margin === 'grid',
    });
  }

  getPositionClasses(position) {
    const positionAt = get(position, 'at', '');
    const isCentered = positionAt === 'center-center';
    return classnames(
      buildClassName('position', position),
      buildClassName('position-center', get(position, 'outside'), 'out'),
      buildClassName('position-cover', get(position, 'cover')),
      buildClassName('position-z-index', get(position, 'zIndexOfOne')),
      buildClassName('position', get(position, 'marginSize')),
      buildClassName('position', get(position, 'type')),
      {
        [buildClassName('position', positionAt)]: !isCentered,
        'uk-position-center': isCentered,
      },
    );
  }

  getTextClasses(text) {
    return classnames(
      buildBreakpointClasses('text', get(text, 'align')),
      buildClassName('text', get(text, 'transform')),
      buildClassName('text', get(text, 'verticalAlign')),
      buildClassName('text', get(text, 'wrapping')),
      {
        'uk-text-bold': get(text, 'bold', false),
        'uk-text-danger': get(text, 'danger', false),
        'uk-text-large': get(text, 'large', false),
        'uk-text-lead': get(text, 'lead', false),
        'uk-text-meta': get(text, 'meta', false),
        'uk-text-muted': get(text, 'muted', false),
        'uk-text-primary': get(text, 'primary', false),
        'uk-text-small': get(text, 'small', false),
        'uk-text-success': get(text, 'success', false),
        'uk-text-warning': get(text, 'warning', false),
      },
    );
  }

  getComponentAttributes(
    itemIn,
    marker,
    overflow,
    parallax,
    scrollspyNav,
    viewport,
  ) {
    const itemInName = buildClassName(get(itemIn, 'parent'), 'item');
    const itemInIndex = get(itemIn, 'index');

    const { animate = {}, ...parallaxProps } = parallax;
    const parallaxOptions = getOptionsString({
      ...animate,
      ...parallaxProps,
    });

    const scrollspyNavOptions = getOptionsString({
      cls: get(scrollspyNav, 'clsActive'),
      offset: get(scrollspyNav, 'offset'),
      overflow: get(scrollspyNav, 'overflow'),
      scroll: get(scrollspyNav, 'scroll'),
    });

    return {
      [itemInName]: itemInIndex,
      'uk-marker': marker ? '' : undefined,
      'uk-height-viewport': viewport ? getOptionsString(viewport) : undefined,
      'uk-overflow-auto': overflow === 'auto' ? '' : undefined,
      'uk-overflow-hidden': overflow === 'hidden' ? '' : undefined,
      'uk-parallax': isEmpty(parallax) ? undefined : parallaxOptions,
      'uk-scrollspy-nav': scrollspyNav ? scrollspyNavOptions : undefined,
    };
  }

  render() {
    const {
      alignItems,
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
      column,
      columnSpan,
      component,
      direction,
      display,
      flex,
      float,
      grow,
      height,
      heightMax,
      hidden,
      hoverTransition,
      inline,
      inverse,
      invisible,
      itemIn,
      justifyContent,
      linkStyle,
      margin,
      marker,
      order,
      overflow,
      padding,
      parallax,
      position,
      resize,
      responsive,
      scrollspyNav,
      sortableHandle,
      style,
      text,
      textAlign,
      toggleFor,
      transformCenter,
      viewport,
      visible,
      width,
      wrap,
      ...rest
    } = this.props;

    const customHeight = [...UIK.BASE_SIZES, 'full'].includes(height);
    const customWidth = UIK.ALL_WIDTHS.includes(width) || isPlainObject(width);

    const ukClasses = classnames(
      this.getAnimationClasses(animation),
      this.getBackgroundClasses(background),
      this.getFlexClasses(
        alignItems,
        direction,
        flex,
        grow,
        justifyContent,
        order,
        wrap,
      ),
      this.getMarginClasses(margin),
      this.getPositionClasses(position),
      this.getTextClasses(text),
      buildBreakpointClasses('align', alignTo),
      buildBreakpointClasses('child-width', childWidth),
      buildClassName('child-width', childWidth),
      buildBreakpointClasses('column', column),
      buildClassName('column', column),
      buildClassName('column', get(column, 'width')),
      buildClassName('border', border),
      buildClassName('box-shadow', boxShadow),
      buildClassName('box-shadow', get(boxShadow, 'size')),
      buildClassName('box-shadow-hover', get(boxShadow, 'hoverSize')),
      buildClassName('display', display),
      buildClassName('height-max', heightMax),
      buildClassName('hidden', hidden),
      buildClassName('float', float),
      buildClassName('link', linkStyle),
      buildClassName('overflow', overflow),
      buildClassName('padding', padding),
      buildClassName('padding', get(padding, 'size')),
      buildClassName('padding-remove', get(padding, 'remove')),
      buildClassName('responsive', responsive),
      buildBreakpointClasses('text', textAlign),
      buildClassName('text', textAlign),
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
        'uk-column-divider': get(column, 'divider', false),
        'uk-column-span': columnSpan,
        'uk-height-1-1': height === 'full',
        'uk-inline': inline,
        'uk-inverse': inverse,
        'uk-invisible': invisible,
        'uk-preserve-width': responsive === false,
        'uk-resize': resize,
        'uk-sorable-handle': sortableHandle === true,
        'uk-animation-toggle': toggleFor === 'animation',
        'uk-transition-toggle': toggleFor === 'transition',
        'uk-visible-toggle': toggleFor === 'visibility',
        'uk-transform-center': transformCenter,
      },
    );

    const attributes = this.getComponentAttributes(
      itemIn,
      marker,
      overflow,
      parallax,
      scrollspyNav,
      viewport,
    );
    const classes = classnames(className, trim(ukClasses));
    const imageUrl = get(background, 'imageUrl');
    const styles = {
      ...style,
      backgroundImage: isNil(imageUrl) ? undefined : `url(${imageUrl})`,
    };

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
      />
    );
  }
}
