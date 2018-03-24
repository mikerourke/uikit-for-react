import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'Progress',
  className: 'uk-progress',
  asType: customPropTypes.customOrStringElement('progress'),
  asDefault: 'progress',
});
