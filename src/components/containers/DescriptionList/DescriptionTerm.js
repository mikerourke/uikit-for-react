import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'DescriptionTerm',
  asType: customPropTypes.customOrStringElement('dt'),
  asDefault: 'dt',
});
