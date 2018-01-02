import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  get,
  isNull,
} from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  customPropTypes,
  getOptionsString,
  UIK,
} from '../../lib';

export const marginPropTypes = {
  margin: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(UIK.LOCATIONS),
    PropTypes.oneOf(UIK.SPACING_MODIFIERS),
    PropTypes.shape({
      top: customPropTypes.forSpacingAtLocation,
      bottom: customPropTypes.forSpacingAtLocation,
      left: customPropTypes.forSpacingAtLocation,
      right: customPropTypes.forSpacingAtLocation,
      all: customPropTypes.forSpacingAtLocation,
    }),
  ]),
  marginContainer: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      firstColumn: PropTypes.string,
      nextRow: PropTypes.shape({
        location: PropTypes.oneOf(UIK.LOCATIONS),
        modifier: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
      }),
    }),
  ]),
};

export const getMarginClassNames = (marginProps) => {
  const marginAllProp = get(marginProps, 'all', null);
  const marginClassNames = (isNull(marginAllProp))
    ? buildObjectOrValueClassNames('margin', marginProps)
    : UIK.LOCATIONS.map(location => buildClassName('margin', marginAllProp, location));
  return classnames(marginClassNames);
};

export const getMarginComponentAttributes = (props) => {
  const marginContainerProps = get(props, 'marginContainer');
  const marginContainerOptions = getOptionsString({
    margin: buildClassName(
      'margin',
      get(marginContainerProps, ['nextRow', 'modifier'], 'small'),
      get(marginContainerProps, ['nextRow', 'location'], 'top'),
    ),
    firstColumn: buildClassName(get(marginContainerProps, 'firstColumn', 'uk-first-column')),
  });

  return {
    'data-uk-margin': (marginContainerProps ? marginContainerOptions : undefined),
  };
};
