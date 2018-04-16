import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
import isString from 'lodash/isString';
import { buildClassName, UIK } from '../../lib';

const marginSpacingPropType = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.oneOf(UIK.SPACING_MODIFIERS),
]);

const propTypes = {
  adjacent: PropTypes.oneOf(['remove']),
  all: marginSpacingPropType,
  auto: PropTypes.bool,
  base: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['auto', 'remove']),
  ]),
  bottom: marginSpacingPropType,
  left: marginSpacingPropType,
  right: marginSpacingPropType,
  top: marginSpacingPropType,
  vertical: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['auto', 'remove']),
  ]),
};

const extrapolateClasses = (margin = {}) => {
  if (margin === true) return 'uk-margin';

  if (margin === 'grid') return 'uk-grid-margin';

  if (isString(margin)) return buildClassName('margin', margin);

  if (isEmpty(margin)) return '';

  const {
    adjacent,
    all,
    auto,
    base,
    bottom,
    left,
    right,
    top,
    vertical,
  } = margin;

  const marginClasses = isNil(all)
    ? [
        buildClassName('margin', base),
        buildClassName('margin', adjacent, 'adjacent'),
        buildClassName('margin', bottom, 'bottom'),
        buildClassName('margin', left, 'left'),
        buildClassName('margin', right, 'right'),
        buildClassName('margin', top, 'top'),
        buildClassName('margin', vertical, 'vertical'),
      ]
    : UIK.LOCATIONS.map(location => buildClassName('margin', all, location));

  return classnames(marginClasses, {
    'uk-margin': base === true,
    'uk-margin-auto': auto,
  });
};

export default {
  propTypes,
  extrapolateClasses,
};
