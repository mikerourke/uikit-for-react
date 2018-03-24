import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'DescriptionDetails',
  asType: customPropTypes.customOrStringElement('dd'),
  asDefault: 'dd',
});
