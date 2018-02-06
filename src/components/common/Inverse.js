import PropTypes from 'prop-types';

const propTypes = PropTypes.oneOf(['dark', 'light']);

const getClasses = inverseProp => `uk-${inverseProp}`;

export default {
  propTypes,
  getClasses,
};
