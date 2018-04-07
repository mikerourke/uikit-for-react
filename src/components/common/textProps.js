import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import {
  buildBreakpointClasses,
  buildClassName,
  customPropTypes,
  UIK,
} from '../../lib';

export const propTypes = {
  align: PropTypes.oneOfType([
    PropTypes.oneOf([...UIK.HORIZONTAL_POSITIONS, 'justify']),
    customPropTypes.forBreakpoints(UIK.HORIZONTAL_POSITIONS),
  ]),
  bold: PropTypes.bool,
  danger: PropTypes.bool,
  large: PropTypes.bool,
  lead: PropTypes.bool,
  meta: PropTypes.bool,
  muted: PropTypes.bool,
  primary: PropTypes.bool,
  small: PropTypes.bool,
  success: PropTypes.bool,
  transform: PropTypes.oneOf(['capitalize', 'lowercase', 'uppercase']),
  verticalAlign: PropTypes.oneOf(['baseline', 'top', 'middle', 'bottom']),
  warning: PropTypes.bool,
  wrapping: PropTypes.oneOf(['break', 'nowrap', 'truncate']),
};

export const extrapolateClasses = (text = {}) => {
  if (isEmpty(text)) return '';

  const {
    align,
    bold,
    danger,
    large,
    lead,
    meta,
    muted,
    primary,
    small,
    success,
    transform,
    verticalAlign,
    warning,
    wrapping,
  } = text;

  return classnames(
    buildBreakpointClasses('text', align),
    buildClassName('text', transform),
    buildClassName('text', verticalAlign),
    buildClassName('text', wrapping),
    {
      'uk-text-bold': bold,
      'uk-text-danger': danger,
      'uk-text-large': large,
      'uk-text-lead': lead,
      'uk-text-meta': meta,
      'uk-text-muted': muted,
      'uk-text-primary': primary,
      'uk-text-small': small,
      'uk-text-success': success,
      'uk-text-warning': warning,
    },
  );
};

export default {
  propTypes,
  extrapolateClasses,
};
