import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import { flatten, isArray, max } from 'lodash';

const customOrStringElement = (...args) =>
  PropTypes.oneOfType([
    PropTypes.oneOf(flatten([...args])),
    PropTypes.element,
    PropTypes.func,
  ]);

const restrictToChildTypes = (...args) => (props, propName, componentName) => {
  const childComponents = props[propName];
  let isInvalid = false;
  const childTypes = [...args];
  React.Children.forEach(childComponents, child => {
    isInvalid = !childTypes.includes(child.type);
  });
  if (isInvalid) {
    return new Error(
      `Only components are allowed as children of ${componentName}`,
    );
  }
  return null;
};

const indexValidator = (props, propName, componentName) => {
  const indexProp = props[propName];
  const maxAllowed = React.Children.count(props.children) - 1;
  const maxErrorMessage = `Invalid ${propName} prop passed to ${componentName}, maximum allowed value is ${maxAllowed}.`;
  if (isArray(indexProp)) {
    if (props.multiple && props.multiple === false) {
      return new Error(
        `You must set multiple = true when you pass an array of values to the ${componentName} prop.`,
      );
    }
    if (max(indexProp) > maxAllowed) return new Error(maxErrorMessage);
  }
  if (indexProp > maxAllowed) return new Error(maxErrorMessage);
  return null;
};

const validateIndex = ExtraPropTypes.and([
  ExtraPropTypes.nonNegativeInteger,
  indexValidator,
]);

const validateIndexArray = ExtraPropTypes.and([
  PropTypes.oneOfType([
    ExtraPropTypes.nonNegativeInteger,
    PropTypes.arrayOf(ExtraPropTypes.nonNegativeInteger),
  ]),
  indexValidator,
]);

export default {
  customOrStringElement,
  restrictToChildTypes,
  validateIndex,
  validateIndexArray,
};
