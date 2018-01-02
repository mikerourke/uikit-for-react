import { isNull, isObjectLike, isUndefined, kebabCase, toPairsIn } from 'lodash';

export {
  buildObjectOrValueClassNames,
  buildClassName,
  buildPositionClassNames,
  getIfDefaultStyle,
} from './classNameBuilder';

export { default as validateClasses } from './classValidator';

export { default as customPropTypes } from './customPropTypes';

export { default as getElementType } from './getElementType';

export const isNullOrUndefined = value => (isNull(value) || isUndefined(value));

export const getOptionsString = (options) => {
  if (isUndefined(options)) return undefined;
  if (!isObjectLike(options)) return '';
  const optionPairs = toPairsIn(options).reduce((acc, [key, value]) => {
    if (value === '') return acc;
    const valuePair = `${kebabCase(key)}: ${value}`;
    return [
      ...acc,
      valuePair,
    ];
  }, []);
  return (optionPairs.length > 0) ? optionPairs.join('; ') : '';
};
