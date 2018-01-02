import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import {
  buildClassName,
  UIK,
} from '../../lib';

export const visibilityPropTypes = {
  hidden: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(UIK.BREAKPOINTS),
    PropTypes.shape({
      breakpoint: PropTypes.oneOf(UIK.BREAKPOINTS),
      hover: PropTypes.bool,
      touch: PropTypes.bool,
    }),
  ]),
  invisible: PropTypes.oneOf([true, false, 'hover']),
  visible: PropTypes.oneOfType([
    PropTypes.oneOf(UIK.BREAKPOINTS),
    PropTypes.shape({
      breakpoint: PropTypes.oneOf(UIK.BREAKPOINTS),
      toggle: PropTypes.bool,
    }),
  ]),
};

export const getVisibilityClassNames = (props) => {
  const touch = get(props, ['hidden', 'touch']);

  return classnames(
    buildClassName('hidden', get(props, 'hidden')),
    buildClassName('hidden', get(props, ['hidden', 'breakpoint'])),
    buildClassName('hidden', 'hover', get(props, ['hidden', 'hover'])),
    buildClassName('hidden', 'touch', (touch === true)),
    buildClassName('hidden', 'notouch', (touch === false)),
    buildClassName('invisible', get(props, 'invisible')),
    buildClassName('visible', get(props, 'visible')),
    buildClassName('visible', get(props, ['visible', 'breakpoint'])),
    buildClassName('visible', 'toggle', get(props, ['visible', 'toggle'])),
  );
};
