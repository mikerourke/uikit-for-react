import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import { buildClassName, UIK } from '../../lib';

const propTypes = PropTypes.oneOfType([
  PropTypes.oneOf(UIK.BACKGROUND_COLORS),
  PropTypes.shape({
    blendMode: PropTypes.oneOf(UIK.BLEND_MODES),
    breakpoint: PropTypes.oneOf(UIK.BREAKPOINTS),
    color: PropTypes.oneOf(UIK.BACKGROUND_COLORS),
    fixed: PropTypes.bool,
    imageUrl: PropTypes.string,
    norepeat: PropTypes.bool,
    position: PropTypes.shape({
      horizontal: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
      vertical: PropTypes.oneOf(UIK.VERTICAL_POSITIONS),
    }),
    size: PropTypes.oneOf(UIK.BACKGROUND_SIZES),
  }),
]);

const getClasses = backgroundProp =>
  classnames(
    buildClassName('background', backgroundProp),
    buildClassName('background', 'blend', get(backgroundProp, 'blendMode')),
    buildClassName('background', 'image', get(backgroundProp, 'breakpoint')),
    buildClassName('background', get(backgroundProp, 'color')),
    buildClassName('background', get(backgroundProp, 'size')),
    buildClassName(
      'background',
      get(backgroundProp, ['position', 'vertical']),
      get(backgroundProp, ['position', 'horizontal']),
    ),
    {
      [buildClassName('background', 'fixed')]: get(
        backgroundProp,
        'fixed',
        false,
      ),
      [buildClassName('background', 'norepeat')]: get(
        backgroundProp,
        'norepeat',
        false,
      ),
    },
  );

export default {
  propTypes,
  getClasses,
};
