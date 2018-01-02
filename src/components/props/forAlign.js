import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import {
  buildClassName,
  UIK,
} from '../../lib';

export const alignPropTypes = {
  align: PropTypes.shape({
    to: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
    breakpoints: PropTypes.shape({
      left: PropTypes.oneOf(UIK.BREAKPOINTS),
      right: PropTypes.oneOf(UIK.BREAKPOINTS),
    }),
  }),
};

export const getAlignClassNames = alignProps => classnames(
  buildClassName('align', get(alignProps, 'to')),
  buildClassName('align', 'left', get(alignProps, ['breakpoints', 'left'])),
  buildClassName('align', 'right', get(alignProps, ['breakpoints', 'right'])),
);
