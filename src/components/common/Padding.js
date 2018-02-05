import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import { buildClassName, UIK } from '../../lib';

const propTypes = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.oneOf(['large', 'small', 'remove']),
  PropTypes.shape({
    remove: PropTypes.oneOf([...UIK.AREAS, ...UIK.LOCATIONS]),
    size: PropTypes.oneOf(['large', 'small']),
  }),
]);

const getClasses = paddingProp =>
  classnames(
    buildClassName('padding', paddingProp),
    buildClassName('padding', get(paddingProp, 'size')),
    buildClassName('padding', 'remove', get(paddingProp, 'remove')),
  );

export default {
  propTypes,
  getClasses,
};
