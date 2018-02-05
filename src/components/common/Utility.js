import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import { buildClassName, UIK } from '../../lib';

const propShape = {
  border: PropTypes.oneOf(['circle', 'rounded']),
  boxShadow: PropTypes.oneOfType([
    PropTypes.oneOf(UIK.GRID_SIZES),
    PropTypes.shape({
      size: PropTypes.oneOf(UIK.GRID_SIZES),
      hoverSize: PropTypes.oneOf(UIK.GRID_SIZES),
      bottom: PropTypes.bool,
    }),
  ]),
  clearfix: ExtraPropTypes.mutuallyExclusiveProps(
    PropTypes.bool,
    'clearfix',
    'float',
  ),
  float: PropTypes.oneOf(['left', 'right']),
  responsive: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['height', 'width']),
  ]),
  transformCenter: PropTypes.bool,
};

const propTypes = PropTypes.shape(propShape);

const getClasses = utilityProp =>
  classnames(
    buildClassName('border', get(utilityProp, 'border')),
    buildClassName('box', 'shadow', get(utilityProp, 'boxShadow')),
    buildClassName('box', 'shadow', get(utilityProp, ['boxShadow', 'size'])),
    buildClassName(
      'box',
      'shadow',
      'hover',
      get(utilityProp, ['boxShadow', 'hoverSize']),
    ),
    buildClassName('responsive', get(utilityProp, 'responsive')),
    {
      [buildClassName('box', 'shadow', 'bottom')]: get(
        utilityProp,
        ['boxShadow', 'bottom'],
        false,
      ),
      [buildClassName('clearfix')]: get(utilityProp, 'clearfix'),
      [buildClassName('transform', 'center')]: get(
        utilityProp,
        'transformCenter',
        false,
      ),
    },
  );

export default {
  propShape,
  propTypes,
  getClasses,
};
