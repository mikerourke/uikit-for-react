import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'NavHeader',
  className: 'uk-nav-header',
  asType: customPropTypes.customOrStringElement('li'),
  asDefault: 'li',
});
