import PropTypes from 'prop-types';
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

export default {
  forSpacingAtLocation,
  shapeForPosition,
  getForBreakpoints,
};
