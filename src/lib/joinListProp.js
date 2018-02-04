import { flatten, isArray, isNil } from 'lodash';

/**
 * Converts the specified prop value from an array to a string separated by
 *    the specified separator.
 * @param {Array|string} prop Value to join, if it is not an array, return the
 *    value.
 * @param {string} separator Separator to join the array with, defaults to
 *    space.
 * @returns {string}
 */
export default function joinListProp(prop, separator = ' ') {
  if (isNil(prop)) return '';
  if (!isArray(prop)) return prop;
  return flatten([prop]).join(separator);
}
