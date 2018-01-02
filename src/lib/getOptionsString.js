import { isObjectLike, isUndefined, kebabCase, toPairsIn } from 'lodash';

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
const getOptionsString = (options) => {
  if (isUndefined(options)) return undefined;
  if (!isObjectLike(options)) return '';
  const optionPairs = toPairsIn(options).reduce((acc, [key, value]) => {
    if (value === '') return acc;
    // Since the object passed in has camel-cased keys, ensure to convert them to kebab-case.
    const valuePair = `${kebabCase(key)}: ${value}`;
    return [
      ...acc,
      valuePair,
    ];
  }, []);
  // If none of the option pairs had actual values, return an empty string to ensure a data-
  // attribute isn't added unnecessarily.
  return (optionPairs.length > 0) ? optionPairs.join('; ') : '';
};

export default getOptionsString;
