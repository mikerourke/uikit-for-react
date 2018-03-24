import { customPropTypes, HTML } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'CardContent',
  asType: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
  asDefault: 'p',
});
