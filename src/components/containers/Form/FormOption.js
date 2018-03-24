import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'FormOption',
  asType: customPropTypes.customOrStringElement('option'),
  asDefault: 'option',
});
