import PropTypes from 'prop-types';
import classnames from 'classnames';
import { without } from 'lodash';
import {
  buildPositionClassNames,
  customPropTypes,
  UIK,
} from '../../lib';

export const positionPropTypes = {
  position: PropTypes.oneOfType([
    PropTypes.oneOf(UIK.LOCATIONS),
    PropTypes.oneOf(UIK.CSS_POSITIONS),
    PropTypes.shape({
      ...customPropTypes.shapeForPosition,
      marginSize: PropTypes.oneOf(without(UIK.SIZES, 'xlarge')),
      cssClass: PropTypes.oneOf(UIK.CSS_POSITIONS),
      zIndexOfOne: PropTypes.bool,
    }),
  ]),
};

export const getPositionClassNames = positionProps => classnames(
  buildPositionClassNames('position', positionProps),
);
