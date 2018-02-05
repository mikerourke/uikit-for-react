import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, isNil, isString } from 'lodash';
import { buildClassName, UIK } from '../../lib';

const marginSpacingPropType = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.oneOf(UIK.SPACING_MODIFIERS),
]);

const propTypes = PropTypes.oneOfType([
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
]);

const getClasses = marginProp => {
  const allMargins = get(marginProp, 'all');
  let marginClasses = isNil(allMargins)
    ? [
        buildClassName('margin', get(marginProp, 'adjacent'), 'adjacent'),
        buildClassName('margin', get(marginProp, 'bottom'), 'bottom'),
        buildClassName('margin', get(marginProp, 'left'), 'left'),
        buildClassName('margin', get(marginProp, 'right'), 'right'),
        buildClassName('margin', get(marginProp, 'top'), 'top'),
        buildClassName('margin', get(marginProp, 'vertical'), 'vertical'),
      ]
    : UIK.LOCATIONS.map(location =>
        buildClassName('margin', allMargins, location),
      );
  if (marginProp === true) marginClasses = buildClassName('margin');

  return classnames(marginClasses, {
    [buildClassName('margin', marginProp)]:
      isString(marginProp) && marginProp !== 'grid',
  });
};

export default {
  propTypes,
  getClasses,
};
