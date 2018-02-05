import { buildBreakpointClasses, customPropTypes, UIK } from '../../lib';

const propTypes = customPropTypes.forBreakpoints(UIK.HORIZONTAL_POSITIONS);

const getClasses = alignProp => buildBreakpointClasses('align', alignProp);

export default {
  propTypes,
  getClasses,
};
