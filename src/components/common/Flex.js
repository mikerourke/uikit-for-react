import PropTypes from 'prop-types';
import { get, isNil } from 'lodash';
import classnames from 'classnames';
import {
  buildBreakpointClasses,
  buildClassName,
  customPropTypes,
  UIK,
} from '../../lib';

const propShape = {
  align: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),
  direction: PropTypes.shape({
    as: PropTypes.oneOf(['column', 'row']),
    reverse: PropTypes.bool,
  }),
  grow: PropTypes.oneOf(['auto', 'full', 'none']),
  inline: PropTypes.bool,
  justify: customPropTypes.forBreakpoints(UIK.FLEX_HORIZONTAL_MODIFIERS),
  order: PropTypes.oneOfType([
    PropTypes.oneOf(['first', 'last']),
    PropTypes.shape({
      first: PropTypes.oneOf(UIK.BREAKPOINTS),
      last: PropTypes.oneOf(UIK.BREAKPOINTS),
    }),
  ]),
  wrap: PropTypes.shape({
    type: PropTypes.oneOf(['nowrap', 'reverse', 'wrap']),
    alignment: PropTypes.oneOf([
      ...UIK.FLEX_VERTICAL_MODIFIERS,
      'around',
      'between',
    ]),
  }),
};

const propTypes = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.oneOf(['inline']),
  PropTypes.shape(propShape),
]);

const getClasses = flexProp => {
  const justify = get(flexProp, 'justify');
  const justifyClasses = justify ? buildBreakpointClasses('flex', justify) : '';
  const growProp = get(flexProp, 'grow');

  return classnames(
    justifyClasses,
    buildClassName('flex', get(flexProp, 'align')),
    buildClassName(
      'flex',
      get(flexProp, ['direction', 'as']),
      get(flexProp, ['direction', 'reverse'], false) ? 'reverse' : '',
    ),
    buildClassName('flex', get(flexProp, 'order')),
    buildClassName('flex', 'first', get(flexProp, ['order', 'first'])),
    buildClassName('flex', 'last', get(flexProp, ['order', 'last'])),
    buildClassName('flex', get(flexProp, ['wrap', 'type'])),
    buildClassName('flex', get(flexProp, ['wrap', 'alignment'])),
    {
      [buildClassName('flex')]: flexProp === true,
      [buildClassName('flex', 'inline')]: flexProp === 'inline',
      [buildClassName('flex', '1')]: growProp === 'full',
      [buildClassName('flex', growProp)]:
        !isNil(growProp) && growProp !== 'full',
    },
  );
};

export default {
  propShape,
  propTypes,
  getClasses,
};
