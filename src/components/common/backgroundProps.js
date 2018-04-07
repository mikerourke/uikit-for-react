import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';
import { buildClassName, UIK } from '../../lib';

const propTypes = {
  blendMode: PropTypes.oneOf(UIK.BLEND_MODES),
  breakpoint: PropTypes.oneOf(UIK.BREAKPOINTS),
  color: PropTypes.oneOf(UIK.BACKGROUND_COLORS),
  contain: PropTypes.bool,
  cover: PropTypes.bool,
  fixed: PropTypes.bool,
  imageUrl: PropTypes.string,
  norepeat: PropTypes.bool,
  position: PropTypes.oneOf([...UIK.X_Y_POSITIONS, 'center-center']),
  size: PropTypes.oneOf(UIK.BACKGROUND_SIZES),
};

const extrapolateClasses = (background = {}) => {
  if (isEmpty(background)) return '';

  if (isString(background)) return buildClassName('background', background);

  const {
    blendMode,
    breakpoint,
    color,
    contain,
    cover,
    fixed,
    norepeat,
    position,
    size,
  } = background;

  return classnames(
    buildClassName('background-blend', blendMode),
    buildClassName('background-image', breakpoint),
    buildClassName('background', color),
    buildClassName('background', position),
    buildClassName('background', size),
    {
      'uk-background-contain': contain,
      'uk-background-cover': cover,
      'uk-background-fixed': fixed,
      'uk-background-norepeat': norepeat,
    },
  );
};

const extrapolateStyle = (background = {}, style = {}) => {
  const { imageUrl = '' } = background;
  if (imageUrl === '') return style;

  return {
    ...style,
    backgroundImage: `url(${imageUrl})`,
  };
};

export default {
  propTypes,
  extrapolateClasses,
  extrapolateStyle,
};
