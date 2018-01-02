import PropTypes from 'prop-types';
import {
  HORIZONTAL_POSITIONS,
  SPACING_MODIFIERS,
  VERTICAL_POSITIONS,
} from '../components/constants';

const forSpacingAtLocation = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.oneOf(SPACING_MODIFIERS),
]);

const shapeForPosition = {
  x: PropTypes.oneOf(HORIZONTAL_POSITIONS),
  y: PropTypes.oneOf(VERTICAL_POSITIONS),
};

const getForBreakpoints = valuePropType => PropTypes.shape({
  atS: valuePropType,
  atM: valuePropType,
  atL: valuePropType,
  atXl: valuePropType,
});

export default {
  forSpacingAtLocation,
  shapeForPosition,
  getForBreakpoints,
};
