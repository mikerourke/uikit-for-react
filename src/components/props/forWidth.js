import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildObjectOrValueClassNames,
  customPropTypes,
  UIK,
} from '../../lib';

export const widthPropTypes = {
  width: PropTypes.oneOfType([
    PropTypes.oneOf(UIK.BASE_WIDTHS),
    customPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.BASE_WIDTHS)),
  ]),
};

export const getWidthClassNames = widthProps => classnames(
  buildObjectOrValueClassNames('width', widthProps),
);
