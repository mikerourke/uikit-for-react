import { customPropTypes, HTML } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'OverlayContext',
  className: 'uk-inline',
  asType: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
});
