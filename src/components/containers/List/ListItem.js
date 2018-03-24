import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'ListItem',
  asType: customPropTypes.customOrStringElement('li'),
  asDefault: 'li',
});
