import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import flatten from 'lodash/flatten';
import get from 'lodash/get';
import isArray from 'lodash/isArray';
import isNil from 'lodash/isNil';
import isString from 'lodash/isString';
import max from 'lodash/max';
import {
  childMatchesType,
  getChildTypeNames,
  getAllChildren,
} from './childrenUtils';

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

/**
 * Returns a PropType that can be used for responsive props to accommodate
 *    for values at different breakpoints.
 * @param {Array} options Array of options to allow for each breakpoint value.
 * @param {Array|Function} validators Additional PropTypes to allow for.
 * @param {Object} extrasForShape Extra PropTypes to append to the breakpoints
 *    shape.
 *
 * @example
 * Definition:
 * -----------
 * size: customPropTypes.forBreakpoints(
 *   ['small', 'medium', 'large'],
 *   PropTypes.oneOf(['xsmall', 'xlarge']),
 *   {
 *     shrink: PropTypes.bool,
 *   },
 * ),
 *
 * Returns:
 * --------
 * size: PropTypes.oneOfType([
 *   PropTypes.oneOf(['xsmall', 'xlarge']),
 *   PropTypes.oneOf(['small', 'medium', 'large']),
 *   PropTypes.shape({
 *     default: PropTypes.oneOf(['small', 'medium', 'large']),
 *     atSm: PropTypes.oneOf(['small', 'medium', 'large']),
 *     atMd: PropTypes.oneOf(['small', 'medium', 'large']),
 *     atLg: PropTypes.oneOf(['small', 'medium', 'large']),
 *     atXl: PropTypes.oneOf(['small', 'medium', 'large']),
 *     shrink: PropTypes.bool,
 *   }),
 * ]),
 */
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
 * Loops through the specified valid child types and determines if the specified
 *    child matches on of those types.  If it doesn't, return false.
 * @param {React.Node} child Child node to evaluate.
 * @param {Array} validChildTypes Array of valid types to compare against child.
 * @returns {boolean}
 */
const validateChildTypes = (child, validChildTypes) => {
  const invalidCount = validChildTypes.reduce(
    (acc, validChildType) =>
      childMatchesType(child, validChildType) ? acc : acc + 1,
    0,
  );
  return invalidCount === 0;
};

const getNamesOfChildTypes = childTypes =>
  childTypes.map(
    childType => (isString(childType) ? childType : get(childType, 'name', '')),
  );

/**
 * Limits the children prop to only the specified component types or HTML
 *    elements.
 * @param args Types to restrict children to.
 */
const restrictToChildTypes = (...args) => (props, propName) => {
  const childenFromProps = props[propName];
  const arrayOfChildren = React.Children.toArray(childenFromProps);

  const childTypes = [...args];
  const validChildren = arrayOfChildren.filter(child =>
    validateChildTypes(child, childTypes),
  );
  const validChildTypeNames = getNamesOfChildTypes(childTypes);

  if (arrayOfChildren.length !== validChildren.length) {
    return new Error(
      `Only the following components are allowed: ${validChildTypeNames}`,
    );
  }
  return null;
};

/**
 * Returns an object with the child type name as the key and the count of
 *    that child type from the array of children as the value.
 * @param {Array} arrayOfChildren Array of React child nodes.
 * @param {Array} childTypes Array of child types to build map for.
 * @returns {Object}
 *
 * @example
 * const arrayOfChildren = [
 *   { type: class OffcanvasToggle },
 *   { type: class OffcanvasToggle },
 *   { type: class Offcanvas },
 *   { type: class Button },
 * ];
 * const childTypes = ["Offcanvas", "OffcanvasToggle"];
 *
 * const childTypeCountsMap = getChildTypeCountsMap(arrayOfChildren, childTypes);
 * console.log(childTypeCountsMap);
 * > { Offcanvas: 1, OffcanvasToggle: 2 }
 */
const getChildTypeCountsMap = (arrayOfChildren, childTypes) => {
  const childTypeNames = getNamesOfChildTypes(childTypes);
  const childTypeCountsMap = childTypeNames.reduce(
    (acc, childTypeName) => ({
      ...acc,
      [childTypeName]: 0,
    }),
    {},
  );

  arrayOfChildren.forEach(child => {
    const { typeName, asTypeName } = getChildTypeNames(child);
    [typeName, asTypeName].forEach(nameOfType => {
      if (!isNil(childTypeCountsMap[nameOfType])) {
        childTypeCountsMap[nameOfType] += 1;
      }
    });
  });

  return childTypeCountsMap;
};

/**
 * PropType to ensure the specified children prop contains at least 1 instance
 *    of the specified type(s).
 * @param args Child types that must be in children.
 */
const mustContainChildOfType = (...args) => props => {
  const arrayOfChildren = getAllChildren(props.children);
  const childTypes = [...args];
  const childTypeCountsMap = getChildTypeCountsMap(arrayOfChildren, childTypes);

  const missingTypes = Object.keys(childTypeCountsMap).filter(
    childTypeName => childTypeCountsMap[childTypeName] === 0,
  );

  if (missingTypes.length !== 0) {
    return new Error(
      `Your component is missing the following child types: ${missingTypes}`,
    );
  }
  return null;
};

/**
 * PropType to ensure the specified children prop contains only 1 instance of
 *    the specified type(s).  If more than 1 instance is found, return an
 *    Error.
 * @param args Child types that must be in children.
 */
const limitToOneOfChildType = (...args) => props => {
  const arrayOfChildren = getAllChildren(props.children);
  const childTypes = [...args];
  const childTypeCountsMap = getChildTypeCountsMap(arrayOfChildren, childTypes);

  const invalidTypes = Object.keys(childTypeCountsMap).filter(childTypeName => {
    const countOfType = childTypeCountsMap[childTypeName];
    return countOfType === 0 || countOfType > 1;
  });

  if (invalidTypes.length !== 0) {
    return new Error(
      `Your component must contain only one of the following components: ${invalidTypes}`,
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
  const childrenCount = React.Children.count(props.children);
  const maxAllowed = childrenCount === 0 ? 0 : childrenCount - 1;
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
  limitToOneOfChildType,
  mustContainChildOfType,
  validateIndex,
  validateIndexArray,
};
