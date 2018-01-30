/* eslint-disable import/prefer-default-export */
import React from 'react';
import CustomPropTypes from 'airbnb-prop-types';
import { isArray, max } from 'lodash';
import PropTypes from 'prop-types';

export const restrictToChildTypes = childTypes => (
  props,
  propName,
  componentName,
) => {
  const childComponents = props[propName];
  let isInvalid = false;
  React.Children.forEach(childComponents, child => {
    if (isArray(childTypes)) {
      isInvalid = !childTypes.includes(child.type);
    } else {
      isInvalid = child.type !== childTypes;
    }
  });
  if (isInvalid) {
    return new Error(
      `Only components are allowed as children of ${componentName}`,
    );
  }
  return null;
};
