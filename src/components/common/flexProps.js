import PropTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import {
  buildBreakpointClasses,
  buildClassName,
  customPropTypes,
  UIK,
} from '../../lib';

export const propTypes = {
  alignItems: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),
  direction: PropTypes.oneOfType([
    PropTypes.oneOf(['column', 'row']),
    PropTypes.shape({
      as: PropTypes.oneOf(['column', 'row']),
      reverse: PropTypes.bool,
    }),
  ]),
  displayAs: PropTypes.bool,
  grow: PropTypes.oneOf(['auto', 'full', 'none']),
  inline: PropTypes.bool,
  justifyContent: customPropTypes.forBreakpoints(UIK.FLEX_HORIZONTAL_MODIFIERS),
  order: PropTypes.oneOfType([
    PropTypes.oneOf(['first', 'last']),
    PropTypes.shape({
      first: PropTypes.oneOf(UIK.BREAKPOINTS),
      last: PropTypes.oneOf(UIK.BREAKPOINTS),
    }),
  ]),
  wrap: PropTypes.oneOfType([
    PropTypes.oneOf(['nowrap', 'reverse', 'wrap']),
    PropTypes.shape({
      type: PropTypes.oneOf(['nowrap', 'reverse', 'wrap']),
      alignment: PropTypes.oneOf([
        ...UIK.FLEX_VERTICAL_MODIFIERS,
        'around',
        'between',
      ]),
    }),
  ]),
};

export const extrapolateClasses = (flex = {}) => {
  if (flex === true) return 'uk-flex';

  if (isEmpty(flex)) return '';

  const {
    alignItems,
    direction,
    displayAs,
    grow,
    inline,
    justifyContent,
    order,
    wrap,
  } = flex;

  const classes = classnames(
    buildClassName('flex', alignItems),
    buildClassName('flex', direction),
    buildClassName(
      'flex',
      get(direction, 'as'),
      get(direction, 'reverse', false) ? 'reverse' : '',
    ),
    buildBreakpointClasses('flex', justifyContent),
    buildClassName('flex', order),
    buildClassName('flex-first', get(order, 'first')),
    buildClassName('flex-last', get(order, 'last')),
    buildClassName('flex', wrap),
    buildClassName('flex', get(wrap, 'type')),
    buildClassName('flex', get(wrap, 'type'), get(wrap, 'alignment')),
    {
      'uk-flex': displayAs,
      'uk-flex-inline': inline,
      'uk-flex-wrap-reverse': wrap === 'reverse',
      'uk-flex-1': grow === 'full',
    },
  );
  return classes.toString().replace('flex-reverse', 'flex-wrap-reverse');
};

export default {
  propTypes,
  extrapolateClasses,
};
