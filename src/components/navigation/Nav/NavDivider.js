import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'NavDivider',
  className: 'uk-nav-divider',
  asType: customPropTypes.customOrStringElement('li'),
  asDefault: 'li',
});
