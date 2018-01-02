import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  customPropTypes,
} from '../../lib';

export const flexPropTypes = {
  flex: PropTypes.shape({
    grow: PropTypes.oneOf(['auto', 'flex', 'none']),
    order: PropTypes.oneOfType([
      PropTypes.oneOf(['first', 'last']),
      customPropTypes.getForBreakpoints(PropTypes.oneOf(['first', 'last'])),
    ]),
  }),
};

export const getFlexClassNames = flexProps => classnames(
  buildClassName('flex', get(flexProps, 'grow')),
  buildObjectOrValueClassNames('flex', get(flexProps, 'order')),
);
