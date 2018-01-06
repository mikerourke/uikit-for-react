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
  atS: valuePropType,
  atM: valuePropType,
  atL: valuePropType,
  atXl: valuePropType,
});

const align = PropTypes.shape({
  to: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
  breakpoints: PropTypes.shape({
    left: PropTypes.oneOf(UIK.BREAKPOINTS),
    right: PropTypes.oneOf(UIK.BREAKPOINTS),
  }),
});

const animation = PropTypes.oneOfType([
  PropTypes.oneOf(UIK.ANIMATIONS),
  PropTypes.shape({
    nameOf: PropTypes.oneOf(UIK.ANIMATIONS),
    reverse: PropTypes.bool,
    fast: PropTypes.bool,
    transformCenter: PropTypes.bool,
    transformOrigin: PropTypes.shape(shapeForPosition),
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

const flex = PropTypes.shape({
  grow: PropTypes.oneOf(['auto', 'flex', 'none']),
  order: PropTypes.oneOfType([
    PropTypes.oneOf(['first', 'last']),
    getForBreakpoints(PropTypes.oneOf(['first', 'last'])),
  ]),
});

const heightMatch = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.shape({
    target: PropTypes.string,
    row: PropTypes.bool,
  }),
]);

const heightViewport = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.shape({
    offsetTop: PropTypes.bool,
    offsetBottom: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
    ]),
    expand: PropTypes.bool,
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
  PropTypes.oneOf(UIK.LOCATIONS),
  PropTypes.oneOf(UIK.SPACING_MODIFIERS),
  PropTypes.shape({
    top: forSpacingAtLocation,
    bottom: forSpacingAtLocation,
    left: forSpacingAtLocation,
    right: forSpacingAtLocation,
    all: forSpacingAtLocation,
    container: PropTypes.bool,
    firstColumn: PropTypes.string,
    nextRow: PropTypes.string,
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

const visible = PropTypes.oneOfType([
  PropTypes.oneOf(UIK.BREAKPOINTS),
  PropTypes.shape({
    breakpoint: PropTypes.oneOf(UIK.BREAKPOINTS),
    toggle: PropTypes.bool,
  }),
]);

const width = PropTypes.oneOfType([
  PropTypes.oneOf(UIK.BASE_WIDTHS),
  getForBreakpoints(PropTypes.oneOf(UIK.BASE_WIDTHS)),
]);

export default {
  align,
  animation,
  background,
  boxShadow,
  drag,
  flex,
  heightMatch,
  heightViewport,
  leader,
  margin,
  hidden,
  padding,
  position,
  visible,
  width,
};
