import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'NavbarNav',
  className: 'uk-navbar-nav',
  asType: customPropTypes.customOrStringElement('ul'),
  asDefault: 'ul',
});
