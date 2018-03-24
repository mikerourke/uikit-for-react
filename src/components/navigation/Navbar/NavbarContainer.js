import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'NavbarContainer',
  className: 'uk-navbar-container',
  asType: customPropTypes.customOrStringElement('nav'),
  asDefault: 'nav',
});
