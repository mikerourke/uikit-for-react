import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';
import { buildClassName, UIK } from '../../lib';

export const propTypes = {
  fast: PropTypes.bool,
  name: PropTypes.oneOf(UIK.ANIMATIONS),
  reverse: PropTypes.bool,
  transformCenter: PropTypes.bool,
  transformOrigin: PropTypes.oneOf(UIK.X_Y_POSITIONS),
};

export const extrapolateClasses = (animation = {}) => {
  if (isString(animation)) return buildClassName('animation', animation);

  if (isEmpty(animation)) return '';

  const { fast, name, reverse, transformCenter, transformOrigin } = animation;

  return classnames(
    buildClassName('animation', name),
    buildClassName('transform-origin', transformOrigin),
    {
      'uk-animation-fast': fast,
      'uk-animation-reverse': reverse,
      'uk-animation-transform-center': transformCenter,
    },
  );
};

export default {
  propTypes,
  extrapolateClasses,
};
