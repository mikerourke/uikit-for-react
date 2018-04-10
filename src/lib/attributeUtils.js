import { ATTR_PREFIX } from './constants';

export const getAttrName = componentName => `${ATTR_PREFIX}-${componentName}`;

export const getAttrSelector = (componentName, attrValue) => {
  const attrName = getAttrName(componentName);
  if (!attrValue) return `[${attrName}]`;
  return `[${attrName}="${attrValue}"]`;
};
