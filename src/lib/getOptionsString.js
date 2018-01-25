import {
  flatten,
  isArray,
  isBoolean,
  isNil,
  isPlainObject,
  isString,
  isUndefined,
  kebabCase,
  toPairs,
} from 'lodash';
import buildClassName from './buildClassName';
import joinListProp from './joinListProp';

/**
 * Returns an array of valid animation names based on the type of the specified optionValue
 *    parameter.
 * @param {Array|string} optionValue Animation name(s) to apply to component.
 * @returns {Array|null}
 */
const getAnimationNames = optionValue => {
  const getAnimationClass = animationName =>
    buildClassName('animation', animationName);
  if (isString(optionValue)) return [getAnimationClass(optionValue)];
  if (isArray(optionValue))
    return optionValue.map(name => getAnimationClass(name));
  return null;
};

/**
 * Returns a component option string to add to the data attribute for the animation prop.
 * @param {Array|boolean|string|Object} optionValue Value of the animation prop from the React
 *    component.
 * @returns {string}
 */
const getAnimationsOptionString = optionValue => {
  if (isBoolean(optionValue)) return `animation: ${optionValue}`;

  // If the optionValue is a string or array, prepend each animation name with the UIkit class
  // and return as valid string.
  const animationNames = getAnimationNames(optionValue);
  if (animationNames !== null)
    return `animation: ${joinListProp(animationNames)}`;

  // This is meant to handle most cases of the animation component option if passed an object.
  // Some of the more unique cases are handled in the component.
  if (isPlainObject(optionValue)) {
    // The duration prop from the object will be appended to the string returned from the function.
    // However, we don't want the duration included in the array of animation names, so it's
    // set inside the reduce() function but isn't appended to the array.
    let duration = null;
    let separator = ' ';
    const allNames = toPairs(optionValue).reduce((acc, [key, value]) => {
      if (key === 'duration') {
        duration = value;
        return acc;
      }

      // If the animation has an in and out, the animation names are separated with a comma.
      if (/in|out/g.test(key)) separator = ',';
      return [...acc, ...getAnimationNames(value)];
    }, []);

    const animationOption = `animation: ${flatten(allNames).join(separator)}`;
    return isNil(duration)
      ? animationOption
      : `${animationOption}; duration: ${duration}`;
  }

  return '';
};

/**
 * Creates a valid string value to pass to UIkit JavaScript component options. It converts the
 *    object parameter to a semicolon-separated string with colon-separated key/value pairs.
 * @param {Object} options Component options to stringify.
 * @returns {string|undefined}
 *
 * @example
 * const options = { offset: 50, top: 100 };
 * console.log(getOptionsString(options));
 * > "offset: 50; top: 100"
 */
const getOptionsString = options => {
  if (isUndefined(options)) return undefined;
  if (!isPlainObject(options)) return '';
  const optionPairs = toPairs(options).reduce((acc, [key, value]) => {
    if (value === '' || isNil(value)) return acc;

    // Since the object passed in has camel-cased keys, ensure to convert them to kebab-case.
    let valuePair = `${kebabCase(key)}: ${value}`;
    const isAnimation = key === 'animation';
    if (isAnimation) valuePair = getAnimationsOptionString(value);
    if (isPlainObject(value) && !isAnimation)
      valuePair = getOptionsString(value);
    return [...acc, valuePair];
  }, []);
  // If none of the option pairs had actual values, return an empty string to ensure a data-
  // attribute isn't added unnecessarily.
  return optionPairs.length > 0 ? optionPairs.join('; ') : '';
};

export default getOptionsString;
