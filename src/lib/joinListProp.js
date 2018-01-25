import { flatten, isArray, isNil } from 'lodash';

const joinListProp = (prop, separator = ' ') => {
  if (isNil(prop)) return '';
  if (!isArray(prop)) return prop;
  return flatten([prop]).join(separator);
};

export default joinListProp;
