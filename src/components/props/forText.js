import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  UIK,
} from '../../lib';

export const textPropTypes = {
  bold: PropTypes.bool,
  color: PropTypes.oneOf(['muted', 'primary', 'success', 'warning', 'danger']),
  horizontalAlign: PropTypes.oneOfType([
    PropTypes.oneOf([...UIK.HORIZONTAL_POSITIONS, 'justify']),
    PropTypes.shape({
      left: PropTypes.oneOf(UIK.BREAKPOINTS),
      center: PropTypes.oneOf(UIK.BREAKPOINTS),
      right: PropTypes.oneOf(UIK.BREAKPOINTS),
    }),
  ]),
  large: PropTypes.bool,
  lead: PropTypes.bool,
  meta: PropTypes.bool,
  small: PropTypes.bool,
  transform: PropTypes.oneOf(['capitalize', 'lowercase', 'uppercase']),
  verticalAlign: PropTypes.oneOf(['baseline', 'top', 'middle', 'bottom']),
  wrap: PropTypes.oneOf(['break', 'nowrap', 'truncate']),
};

export const getTextClassNames = props => classnames(
  buildClassName('text', 'bold', get(props, 'bold')),
  buildClassName('text', get(props, 'color')),
  buildObjectOrValueClassNames('text', get(props, 'horizontalAlign')),
  buildClassName('text', 'large', get(props, 'large')),
  buildClassName('text', 'lead', get(props, 'lead')),
  buildClassName('text', 'meta', get(props, 'meta')),
  buildClassName('text', 'small', get(props, 'small')),
  buildClassName('text', get(props, 'transform')),
  buildClassName('text', get(props, 'verticalAlign')),
  buildClassName('text', get(props, 'wrap')),
);
