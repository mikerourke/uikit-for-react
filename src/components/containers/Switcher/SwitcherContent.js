import { customPropTypes, HTML } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'SwitcherContent',
  className: 'uk-switcher',
  asType: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
  asDefault: 'ul',
});
