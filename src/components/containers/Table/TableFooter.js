import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'TableFooter',
  asType: customPropTypes.customOrStringElement('tfoot'),
  asDefault: 'tfoot',
});
