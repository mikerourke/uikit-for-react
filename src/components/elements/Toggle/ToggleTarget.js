import { customPropTypes, HTML } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'ToggleTarget',
  asType: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
});
