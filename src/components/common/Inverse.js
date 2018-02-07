import PropTypes from 'prop-types';
import { buildClassName } from '../../lib';

const propTypes = PropTypes.oneOf(['dark', 'light']);

const getClasses = inverseProp => buildClassName(inverseProp);

export default {
  propTypes,
  getClasses,
};
