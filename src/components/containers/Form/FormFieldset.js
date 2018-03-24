import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'FormFieldset',
  className: 'uk-fieldset',
  asType: customPropTypes.customOrStringElement('fieldset'),
  asDefault: 'fieldset',
});
