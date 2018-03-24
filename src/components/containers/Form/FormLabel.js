import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'FormLabel',
  className: 'uk-form-label',
  asType: customPropTypes.customOrStringElement('label'),
  asDefault: 'label',
});
