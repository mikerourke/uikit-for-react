import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import flatten from 'lodash/flatten';
import isArray from 'lodash/isArray';
import max from 'lodash/max';

/**
 * Limits the specified prop to either an HTML element, React Node, or one of
 *    the string values representing an HTML tag.
 * @param args Array or list of valid HTML tags ('a', 'div', etc.).
 */
const customOrStringElement = (...args) =>
  PropTypes.oneOfType([
    PropTypes.oneOf(flatten([...args])),
    PropTypes.element,
    PropTypes.func,
  ]);

const forBreakpoints = (options, validators = [], extrasForShape = {}) => {
  const validValidators = flatten([validators]);
  return PropTypes.oneOfType([
    ...validValidators,
    PropTypes.oneOf(options),
    PropTypes.shape({
      default: PropTypes.oneOf(options),
      atSm: PropTypes.oneOf(options),
      atMd: PropTypes.oneOf(options),
      atLg: PropTypes.oneOf(options),
      atXl: PropTypes.oneOf(options),
      ...extrasForShape,
    }),
  ]);
};

/**
 * Limits the children prop to only the specified component types or HTML
 *    elements.
 * @param args
 * @returns {function(*, *, *)}
 */
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

/**
 * Validates the activeIndex/defaultIndex value/array used in the validateIndex
 *    custom PropType. If the user specified an index that is greater than the
 *    amount of children, the user will get a PropTypes error.
 * @param {Object} props Props from the React component.
 * @param {string} propName Name of the prop being validated.
 * @param {string} componentName Name of the component being validated.
 */
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

/**
 * Prevents the user from specifying an index greater than the amount of
 *    child elements (cannot set activeIndex for a Tab component to 3 if there
 *    are only 2 TabItem children).
 */
const validateIndex = ExtraPropTypes.and([
  ExtraPropTypes.nonNegativeInteger,
  indexValidator,
]);

/**
 * Same as validateIndex, but checks the max value of an array of indices.
 */
const validateIndexArray = ExtraPropTypes.and([
  PropTypes.oneOfType([
    ExtraPropTypes.nonNegativeInteger,
    PropTypes.arrayOf(ExtraPropTypes.nonNegativeInteger),
  ]),
  indexValidator,
]);

export default {
  customOrStringElement,
  forBreakpoints,
  restrictToChildTypes,
  validateIndex,
  validateIndexArray,
};
