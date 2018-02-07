import PropTypes from 'prop-types';
import { isPlainObject } from 'lodash';
import { buildBreakpointClasses, customPropTypes, UIK } from '../../lib';

const propTypes = customPropTypes.forBreakpoints(
  UIK.ALL_WIDTHS,
  PropTypes.number,
);

const getClasses = widthProp => {
  const isCustomWidth =
    UIK.ALL_WIDTHS.includes(widthProp) || isPlainObject(widthProp);
  return isCustomWidth ? buildBreakpointClasses('width', widthProp) : widthProp;
};

export default {
  propTypes,
  getClasses,
};
