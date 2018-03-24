import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'TableHeader',
  asType: customPropTypes.customOrStringElement('thead'),
  asDefault: 'thead',
});
