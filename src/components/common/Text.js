import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import {
  buildBreakpointClasses,
  buildClassName,
  customPropTypes,
  UIK,
} from '../../lib';

const propShape = {
  align: PropTypes.oneOfType([
    PropTypes.oneOf(['justify']),
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

const propTypes = PropTypes.shape(propShape);

const getClasses = textProp =>
  classnames(
    buildBreakpointClasses('text', get(textProp, 'align')),
    buildClassName('text', get(textProp, 'transform')),
    buildClassName('text', get(textProp, 'verticalAlign')),
    buildClassName('text', get(textProp, 'wrapping')),
    {
      'uk-text-bold': get(textProp, 'bold', false),
      'uk-text-danger': get(textProp, 'danger', false),
      'uk-text-large': get(textProp, 'large', false),
      'uk-text-lead': get(textProp, 'lead', false),
      'uk-text-meta': get(textProp, 'meta', false),
      'uk-text-muted': get(textProp, 'muted', false),
      'uk-text-primary': get(textProp, 'primary', false),
      'uk-text-small': get(textProp, 'small', false),
      'uk-text-success': get(textProp, 'success', false),
      'uk-text-warning': get(textProp, 'warning', false),
    },
  );

export default {
  propShape,
  propTypes,
  getClasses,
};
