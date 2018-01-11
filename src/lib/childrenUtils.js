import { find, some } from 'lodash';
import { Children } from 'react';

export const hasChildType = (children, childType) => (
  some(Children.toArray(children), { type: childType })
);

export const findChildByType = (children, childType) => (
  find(Children.toArray(children), { type: childType })
);
