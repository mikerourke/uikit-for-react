import UIkit from 'uikit';
import get from 'lodash/get';
import has from 'lodash/has';
import invoke from 'lodash/invoke';
import isNil from 'lodash/isNil';
import toPairs from 'lodash/toPairs';

export const addEventInvoker = (
  ukElement,
  ukEventName,
  propsEventName,
  componentProps,
) => {
  if (isNil(ukElement)) return false;
  const elementRef = has(ukElement, '$el') ? ukElement.$el : ukElement;
  if (!get(componentProps, propsEventName)) return false;
  const invokedEvent = e =>
    invoke(componentProps, propsEventName, e, componentProps);
  UIkit.util.on(elementRef, ukEventName, invokedEvent);
  return true;
};

export const addMultipleEventInvokers = (
  ukElement,
  ukToPropsEventMap,
  componentProps,
) => {
  toPairs(ukToPropsEventMap).forEach(([ukEventName, propsEventName]) => {
    addEventInvoker(ukElement, ukEventName, propsEventName, componentProps);
  });
};
