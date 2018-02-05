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
  bold: PropTypes.bool,
  danger: PropTypes.bool,
  horizontalAlign: customPropTypes.forBreakpoints([
    ...UIK.HORIZONTAL_POSITIONS,
    'justify',
  ]),
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
    buildBreakpointClasses('text', get(textProp, 'horizontalAlign')),
    buildClassName('text', get(textProp, 'transform')),
    buildClassName('text', get(textProp, 'verticalAlign')),
    buildClassName('text', get(textProp, 'wrapping')),
    {
      [buildClassName('text', 'bold')]: get(textProp, 'bold', false),
      [buildClassName('text', 'danger')]: get(textProp, 'danger', false),
      [buildClassName('text', 'large')]: get(textProp, 'large', false),
      [buildClassName('text', 'lead')]: get(textProp, 'lead', false),
      [buildClassName('text', 'meta')]: get(textProp, 'meta', false),
      [buildClassName('text', 'muted')]: get(textProp, 'muted', false),
      [buildClassName('text', 'primary')]: get(textProp, 'primary', false),
      [buildClassName('text', 'small')]: get(textProp, 'small', false),
      [buildClassName('text', 'success')]: get(textProp, 'success', false),
      [buildClassName('text', 'warning')]: get(textProp, 'warning', false),
    },
  );

export default {
  propShape,
  propTypes,
  getClasses,
};
