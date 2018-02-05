import classnames from 'classnames';
import {
  first,
  get,
  isBoolean,
  isNil,
  isPlainObject,
  isUndefined,
  kebabCase,
  some,
} from 'lodash';

/**
 * Cleans up the className to ensure it is a valid UIkit class.
 * @param {string} className Name of the class to sanitize.
 * @returns {string}
 */
const sanitizeClassName = className =>
  `uk-${className}`
    // This removes any duplicate "uk-" to ensure the class name is valid.
    .replace(/(uk-)(?=.*\1)/gi, '')
    // This removes extra dashes left by a boolean value (we don't want the word
    // "true" included) as well as spaces or trailing dashes.
    .replace(/(--)(-$)( )/gi, '')
    // This removes the dash before a breakpoint value.
    .replace(/-@/gi, '@')
    // This replaces the "/" for a width with a "-".
    .replace(/\//g, '-')
    // This removes any invalid trailing "-".
    .replace(/-$/g, '');

/**
 * Returns a valid UIkit class name to apply to the component.
 * @param {*} args Class elements used to build the class string.
 * @returns {string}
 *
 * @example
 * <Button primary />
 * console.log(buildClassName('button', 'primary'));
 * > uk-button-primary
 *
 * <Panel background={{ blend: 'multiply' }} />
 * console.log(buildClassName('background', 'blend', 'multiply'));
 * > uk-background-blend-multiply
 */
export const buildClassName = (...args) => {
  if (isUndefined(args))
    throw new Error('Missing class element in buildClassName');

  const classElements = [...args];
  if (classElements.length === 1) {
    const classElement = first(classElements);
    return isNil(classElement) ? '' : sanitizeClassName(classElement);
  }

  const getIsInvalid = element =>
    isUndefined(element) || !element || isPlainObject(element);
  if (some(classElements, getIsInvalid)) return '';

  const classString = classElements
    .reduce((acc, element) => {
      if (isBoolean(element)) return acc;
      const validElement = /@/.test(element) ? element : kebabCase(element);
      return [...acc, validElement];
    }, [])
    .join('-');

  return sanitizeClassName(classString);
};

export const buildBreakpointClasses = (classPrefix, propValue) =>
  classnames(
    buildClassName(classPrefix, propValue),
    buildClassName(classPrefix, get(propValue, 'default')),
    buildClassName(classPrefix, get(propValue, 'atSm'), '@s'),
    buildClassName(classPrefix, get(propValue, 'atMd'), '@m'),
    buildClassName(classPrefix, get(propValue, 'atLg'), '@l'),
    buildClassName(classPrefix, get(propValue, 'atXl'), '@xl'),
  );