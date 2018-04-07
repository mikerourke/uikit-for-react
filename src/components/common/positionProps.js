import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';
import { buildClassName, UIK } from '../../lib';

const propTypes = {
  at: PropTypes.oneOf([...UIK.X_Y_POSITIONS, 'center-center']),
  cover: PropTypes.bool,
  marginSize: PropTypes.oneOf(UIK.BASE_SIZES),
  outside: PropTypes.oneOf(['left', 'right']),
  type: PropTypes.oneOf(UIK.CSS_POSITIONS),
  zIndexOfOne: PropTypes.bool,
};

const extrapolateClasses = (position = {}) => {
  if (isString(position)) return buildClassName('position', position);

  if (isEmpty(position)) return '';

  const { at, cover, marginSize, outside, type, zIndexOfOne } = position;

  const isCentered = at === 'center-center';
  return classnames(
    buildClassName('position', position),
    buildClassName('position-center', outside, 'out'),
    buildClassName('position-cover', cover),
    buildClassName('position-z-index', zIndexOfOne),
    buildClassName('position', marginSize),
    buildClassName('position', type),
    {
      [buildClassName('position', at)]: !isCentered,
      'uk-position-center': isCentered,
    },
  );
};

export default {
  propTypes,
  extrapolateClasses,
};
