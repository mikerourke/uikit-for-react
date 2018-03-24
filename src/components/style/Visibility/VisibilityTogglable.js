import { customPropTypes, HTML } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'VisibilityTogglable',
  className: 'uk-visible-toggle',
  asType: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
});
