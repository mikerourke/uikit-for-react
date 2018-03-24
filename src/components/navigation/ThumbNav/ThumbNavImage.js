import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'ThumbNavImage',
  asType: customPropTypes.customOrStringElement('img'),
  asDefault: 'img',
});
