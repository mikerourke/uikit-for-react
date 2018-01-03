// TODO: Add comment headers to each PropType and JSDoc headers to functions.
import { get, isArray, omit, pick } from 'lodash';
import classnames from 'classnames';
import { alignPropTypes, getAlignClassNames } from './forAlign';
import { animationPropTypes, getAnimationClassNames } from './forAnimation';
import { backgroundPropTypes, getBackgroundClassNames } from './forBackground';
import { flexPropTypes, getFlexClassNames } from './forFlex';
import { paddingPropTypes, getPaddingClassNames } from './forPadding';
import { positionPropTypes, getPositionClassNames } from './forPosition';
import { textPropTypes, getTextClassNames } from './forText';
import { visibilityPropTypes, getVisibilityClassNames } from './forVisibility';
import { widthPropTypes, getWidthClassNames } from './forWidth';
import {
  marginPropTypes,
  getMarginClassNames,
  getMarginComponentAttributes,
} from './forMargin';
import {
  utilityPropTypes,
  getUtilityClassNames,
  getHeightMatchComponentAttributes,
  getHeightViewportComponentAttributes,
  getLeaderComponentAttributes,
} from './forUtility';

export const sharedPropTypes = {
  ...alignPropTypes,
  ...animationPropTypes,
  ...backgroundPropTypes,
  ...flexPropTypes,
  ...marginPropTypes,
  ...paddingPropTypes,
  ...positionPropTypes,
  ...textPropTypes,
  ...utilityPropTypes,
  ...visibilityPropTypes,
  ...widthPropTypes,
};

const getApplicableProps = (props, options) => {
  // The user can optionally specify props to exclude or include when getting the root classes.
  const { exclude = '', include = '' } = options;

  // If the user attempts to specify both excluded and included props, throw an error.
  // We only want one or the other.
  if (include.length !== 0 && exclude.length !== 0) {
    throw new Error('You can only include OR exclude props from getRootClassNames.');
  }

  const getPropGroup = propOption => ((isArray(propOption)) ? propOption : [propOption]);
  if (exclude !== '') return omit(props, getPropGroup(exclude));
  if (include !== '') return pick(props, getPropGroup(include));
  return this.props;
}

export const getSharedClassNames = (
  props,
  options = { exclude: '', include: '' },
) => {
  const applicableProps = getApplicableProps(props, options);

  return classnames(
    getAlignClassNames(get(applicableProps, 'align')),
    getFlexClassNames(get(applicableProps, 'flex')),
    getMarginClassNames(get(applicableProps, 'margin')),
    getPaddingClassNames(get(applicableProps, 'padding')),
    getPositionClassNames(get(applicableProps, 'position')),
    getTextClassNames(get(applicableProps, 'text')),
    getVisibilityClassNames(applicableProps),
    getWidthClassNames(get(applicableProps, 'width')),
    getAnimationClassNames(get(applicableProps, 'animation')),
    getBackgroundClassNames(get(applicableProps, 'background')),
    getUtilityClassNames(applicableProps),
  ).trim();
};

export const getSharedAttributes = props => ({
  ...getMarginComponentAttributes(props),
  ...getHeightMatchComponentAttributes(props),
  ...getHeightViewportComponentAttributes(props),
  ...getLeaderComponentAttributes(props),
});
