import React from 'react';
import classnames from 'classnames';
import { get, keys, omit } from 'lodash';
import {
  alignPropTypes,
  animationPropTypes,
  backgroundPropTypes,
  flexPropTypes,
  marginPropTypes,
  paddingPropTypes,
  positionPropTypes,
  textPropTypes,
  utilityPropTypes,
  visibilityPropTypes,
  widthPropTypes,
  getAlignClassNames,
  getAnimationClassNames,
  getBackgroundClassNames,
  getFlexClassNames,
  getMarginClassNames,
  getPaddingClassNames,
  getPositionClassNames,
  getTextClassNames,
  getUtilityClassNames,
  getVisibilityClassNames,
  getWidthClassNames,
  getMarginComponentAttributes,
  getHeightMatchComponentAttributes,
  getHeightViewportComponentAttributes,
  getLeaderComponentAttributes,
} from '../props';

const getStyle = Symbol('getStyle');
const getAttributes = Symbol('getAttributes');

class Root extends React.Component {
  static propTypes = {
    ...alignPropTypes,
    ...animationPropTypes,
    ...backgroundPropTypes,
    ...flexPropTypes,
    ...marginPropTypes,
    ...paddingPropTypes,
    ...positionPropTypes,
    ...utilityPropTypes,
    ...visibilityPropTypes,
    ...widthPropTypes,
    text: textPropTypes,
  };

  getRootClassNames() {
    return classnames(
      getAlignClassNames(get(this.props, 'align')),
      getAnimationClassNames(get(this.props, 'animation')),
      getBackgroundClassNames(get(this.props, 'background')),
      getFlexClassNames(get(this.props, 'align')),
      getMarginClassNames(get(this.props, 'margin')),
      getPaddingClassNames(get(this.props, 'padding')),
      getPositionClassNames(get(this.props, 'position')),
      getTextClassNames(get(this.props, 'text')),
      getUtilityClassNames(this.props),
      getVisibilityClassNames(this.props),
      getWidthClassNames(get(this.props, 'width')),
    ).trim();
  }

  [getStyle]() {
    const imageUrl = get(this.props, ['background', 'imageUrl'], '');
    const currentStyle = get(this.props, 'style', {});
    return (imageUrl !== '')
      ? { ...currentStyle, backgroundImage: `url(${imageUrl})` }
      : { ...currentStyle };
  }

  [getAttributes]() {
    return {
      ...getMarginComponentAttributes(this.props),
      ...getHeightMatchComponentAttributes(this.props),
      ...getHeightViewportComponentAttributes(this.props),
      ...getLeaderComponentAttributes(this.props),
    };
  }

  getValidProps(currentProps) {
    const style = this[getStyle]();
    const attributes = this[getAttributes]();
    const omittedPropNames = keys(Root.propTypes);
    const validProps = omit(currentProps, omittedPropNames);
    return {
      ...validProps,
      ...attributes,
      style,
    };
  }
}

export default Root;
