import PropTypes from 'prop-types';
import { without } from 'lodash';
import { UIK } from './constants';

const forSpacingAtLocation = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.oneOf(UIK.SPACING_MODIFIERS),
]);

const shapeForPosition = {
  horizontal: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
  vertical: PropTypes.oneOf(UIK.VERTICAL_POSITIONS),
};

const getForBreakpoints = valuePropType => PropTypes.shape({
  atSm: valuePropType,
  atMd: valuePropType,
  atLg: valuePropType,
  atXl: valuePropType,
});

const align = PropTypes.shape({
  to: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
  breakpoints: PropTypes.shape({
    left: PropTypes.oneOf(UIK.BREAKPOINTS),
    right: PropTypes.oneOf(UIK.BREAKPOINTS),
  }),
});

const animationName = PropTypes.oneOfType([
  PropTypes.oneOf(UIK.ANIMATIONS),
  PropTypes.arrayOf(UIK.ANIMATIONS),
]);

const animation = PropTypes.oneOfType([
  PropTypes.oneOf(UIK.ANIMATIONS),
  PropTypes.arrayOf(UIK.ANIMATIONS),
  PropTypes.shape({
    name: animationName,
    duration: PropTypes.number,
  }),
]);

const background = PropTypes.oneOfType([
  PropTypes.oneOf(UIK.BACKGROUND_COLORS),
  PropTypes.shape({
    color: PropTypes.oneOf(UIK.BACKGROUND_COLORS),
    size: PropTypes.oneOf(UIK.BACKGROUND_SIZES),
    position: PropTypes.shape(shapeForPosition),
    norepeat: PropTypes.bool,
    fixed: PropTypes.bool,
    breakpoint: PropTypes.oneOf(UIK.BREAKPOINTS),
    blend: PropTypes.oneOf(UIK.BLEND_MODES),
    imageUrl: PropTypes.string,
  }),
]);

const boxShadow = PropTypes.oneOfType([
  PropTypes.oneOf(UIK.SIZES),
  PropTypes.shape({
    size: PropTypes.oneOf(UIK.SIZES),
    hoverSize: PropTypes.oneOf(UIK.SIZES),
    bottom: PropTypes.bool,
  }),
]);

const drag = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.shape({
    showIcon: PropTypes.bool,
    showOver: PropTypes.bool,
  }),
]);

const heightMatch = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.shape({
    selectorTarget: PropTypes.string,
    row: PropTypes.bool,
  }),
]);

const hidden = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.oneOf(UIK.BREAKPOINTS),
  PropTypes.shape({
    breakpoint: PropTypes.oneOf(UIK.BREAKPOINTS),
    hover: PropTypes.bool,
    touch: PropTypes.bool,
  }),
]);

const leader = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.shape({
    fill: PropTypes.string,
    media: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(UIK.BREAKPOINTS),
    ]),
  }),
]);

const margin = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.oneOf([...UIK.LOCATIONS, ...UIK.SPACING_MODIFIERS, 'grid']),
  PropTypes.shape({
    top: forSpacingAtLocation,
    bottom: forSpacingAtLocation,
    left: forSpacingAtLocation,
    right: forSpacingAtLocation,
    all: forSpacingAtLocation,
  }),
]);

const nextRow = PropTypes.shape({
  spacing: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
  location: PropTypes.oneOf(UIK.LOCATIONS),
});

const order = PropTypes.oneOfType([
  PropTypes.oneOf(['first', 'last']),
  PropTypes.shape({
    first: PropTypes.oneOf(UIK.BREAKPOINTS),
    last: PropTypes.oneOf(UIK.BREAKPOINTS),
  }),
]);

const padding = PropTypes.oneOfType([
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
]);

const position = PropTypes.oneOfType([
  PropTypes.oneOf(UIK.LOCATIONS),
  PropTypes.oneOf(UIK.CSS_POSITIONS),
  PropTypes.shape({
    ...shapeForPosition,
    marginSize: PropTypes.oneOf(without(UIK.SIZES, 'xlarge')),
    cssClass: PropTypes.oneOf(UIK.CSS_POSITIONS),
    zIndexOfOne: PropTypes.bool,
  }),
]);

const viewport = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.shape({
    offsetTop: PropTypes.bool,
    offsetBottom: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
    ]),
    expand: PropTypes.bool,
    minHeight: PropTypes.number,
  }),
]);

const visible = PropTypes.oneOfType([
  PropTypes.oneOf(UIK.BREAKPOINTS),
  PropTypes.shape({
    breakpoint: PropTypes.oneOf(UIK.BREAKPOINTS),
    toggle: PropTypes.bool,
  }),
]);

const width = PropTypes.oneOfType([
  PropTypes.oneOf(UIK.ALL_WIDTHS),
  getForBreakpoints(PropTypes.oneOf(UIK.ALL_WIDTHS)),
]);

export default {
  getForBreakpoints,
  shapeForPosition,
  align,
  animation,
  animationName,
  background,
  boxShadow,
  drag,
  heightMatch,
  hidden,
  leader,
  margin,
  nextRow,
  order,
  padding,
  position,
  viewport,
  visible,
  width,
};
