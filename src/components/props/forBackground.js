import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import {
  buildClassName,
  buildPositionClassNames,
  customPropTypes,
  UIK,
} from '../../lib';

export const backgroundPropTypes = {
  background: PropTypes.oneOfType([
    PropTypes.oneOf(UIK.BACKGROUND_COLORS),
    PropTypes.shape({
      color: PropTypes.oneOf(UIK.BACKGROUND_COLORS),
      size: PropTypes.oneOf(UIK.BACKGROUND_SIZES),
      position: PropTypes.shape(customPropTypes.shapeForPosition),
      norepeat: PropTypes.bool,
      fixed: PropTypes.bool,
      breakpoint: PropTypes.oneOf(UIK.BREAKPOINTS),
      blend: PropTypes.oneOf(UIK.BLEND_MODES),
      imageUrl: PropTypes.string,
    }),
  ]),
};

export const getBackgroundClassNames = backgroundProps => classnames(
  buildClassName('background', backgroundProps),
  buildClassName('background', get(backgroundProps, 'color')),
  buildClassName('background', get(backgroundProps, 'size')),
  buildPositionClassNames('background', get(backgroundProps, 'position')),
  buildClassName('background', 'norepeat', get(backgroundProps, 'norepeat')),
  buildClassName('background', 'fixed', get(backgroundProps, 'fixed')),
  buildClassName('background', 'image', get(backgroundProps, 'breakpoint')),
  buildClassName('background', 'blend', get(backgroundProps, 'blend')),
);
