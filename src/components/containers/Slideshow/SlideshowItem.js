import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'SlideshowItem',
  asType: customPropTypes.customOrStringElement('li'),
  asDefault: 'li',
});
