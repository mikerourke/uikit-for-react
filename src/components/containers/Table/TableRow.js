import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'TableRow',
  asType: customPropTypes.customOrStringElement('tr'),
  asDefault: 'tr',
});
