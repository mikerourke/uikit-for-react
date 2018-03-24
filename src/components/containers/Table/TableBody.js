import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'TableBody',
  asType: customPropTypes.customOrStringElement('tbody'),
  asDefault: 'tbody',
});
