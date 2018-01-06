import { find, some } from 'lodash';
import { Children } from 'react';

const hasChildType = (children, childType) => (
  some(Children.toArray(children), { type: childType })
);

const findChildByType = (children, childType) => (
  find(Children.toArray(children), { type: childType })
);

export default {
  hasChildType,
  findChildByType,
};
