import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'OverlayImage',
  asType: customPropTypes.customOrStringElement('img'),
  asDefault: 'img',
});
