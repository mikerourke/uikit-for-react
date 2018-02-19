import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { get, isNil } from 'lodash';
import { buildClassName, getOptionsString, UIK } from '../../lib';

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
  display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
  float: PropTypes.oneOf(['left', 'right']),
  height: PropTypes.oneOf([...UIK.BASE_SIZES, 'full']),
  inline: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['clip'])]),
  maxHeight: PropTypes.oneOf(UIK.BASE_SIZES),
  overflow: PropTypes.oneOf(['auto', 'hidden']),
  responsive: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['height', 'width']),
  ]),
  transformCenter: PropTypes.bool,
  viewport: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      expand: PropTypes.bool,
      minHeight: PropTypes.number,
      offsetBottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
      offsetTop: PropTypes.bool,
    }),
  ]),
};

const propTypes = PropTypes.shape(propShape);

const getClasses = utilityProp => {
  const height = get(utilityProp, 'height');
  return classnames(
    buildClassName('border', get(utilityProp, 'border')),
    buildClassName('box', 'shadow', get(utilityProp, 'boxShadow')),
    buildClassName('box', 'shadow', get(utilityProp, ['boxShadow', 'size'])),
    buildClassName(
      'box',
      'shadow',
      'hover',
      get(utilityProp, ['boxShadow', 'hoverSize']),
    ),
    buildClassName('display', get(utilityProp, 'display')),
    buildClassName('inline', get(utilityProp, 'inline')),
    buildClassName('overflow', get(utilityProp, 'overflow')),
    buildClassName('responsive', get(utilityProp, 'responsive')),
    {
      [buildClassName('height', height)]: !isNil(height) && height !== 'full',
      'uk-box-shadow-bottom': get(utilityProp, ['boxShadow', 'bottom'], false),
      'uk-clearfix': get(utilityProp, 'clearfix'),
      'uk-height-1-1': height === 'full',
      'uk-transform-center': get(utilityProp, 'transformCenter', false),
    },
  );
};

const getOptions = utilityProp => {
  const viewport = get(utilityProp, 'viewport');
  if (isNil(viewport)) return {};
  return {
    'data-uk-height-viewport': getOptionsString(viewport),
  };
};

export default {
  propShape,
  propTypes,
  getClasses,
  getOptions,
};
