import { customPropTypes, HTML } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'CardBadge',
  className: 'uk-card-badge',
  asType: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
});
