import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import {
  buildClassName,
  buildPositionClassNames,
  customPropTypes,
  UIK,
} from '../../lib';

export const animationPropTypes = {
  animation: PropTypes.oneOfType([
    PropTypes.oneOf(UIK.ANIMATIONS),
    PropTypes.shape({
      name: PropTypes.oneOf(UIK.ANIMATIONS),
      reverse: PropTypes.bool,
      fast: PropTypes.bool,
      transformCenter: PropTypes.bool,
      transformOrigin: PropTypes.shape(customPropTypes.shapeForPosition),
    }),
  ]),
};

export const getAnimationClassNames = animationProps => classnames(
  buildClassName('animation', animationProps),
  buildClassName('animation', get(animationProps, 'name')),
  buildClassName('animation', 'reverse', get(animationProps, 'reverse')),
  buildClassName('animation', 'fast', get(animationProps, 'fast')),
  buildClassName('transform', 'center', get(animationProps, 'transformCenter')),
  buildPositionClassNames(
    'transform-origin',
    get(animationProps, 'transformOrigin'),
    { omitCenter: true },
  ),
);
