import {
  get,
  isNil,
  isObjectLike,
  isUndefined,
  kebabCase,
  toPairsIn,
} from 'lodash';
import { buildClassName } from './buildProps';

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
export const getOptionsString = (options) => {
  if (isUndefined(options)) return undefined;
  if (!isObjectLike(options)) return '';
  const optionPairs = toPairsIn(options).reduce((acc, [key, value]) => {
    if (value === '' || isUndefined(value)) return acc;
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

export const buildMarginAttributeOptions = (dynamic, firstColumn, nextRow) => {
  const hasMarginAttribute = ((dynamic === true) || !isNil(firstColumn) || !isNil(nextRow));
  if (!hasMarginAttribute) return undefined;

  const marginAttributeOptions = getOptionsString({
    firstColumn: (isNil(firstColumn)) ? 'uk-first-column' : firstColumn,
    margin: buildClassName(
      'margin',
      get(nextRow, 'spacing', 'small'),
      get(nextRow, 'location', 'top'),
    ),
  });

  return {
    'data-uk-margin': marginAttributeOptions,
  };
};
