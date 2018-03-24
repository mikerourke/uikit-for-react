import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'Badge',
  className: 'uk-badge',
  asType: customPropTypes.customOrStringElement('a', 'span'),
  asDefault: 'span',
});
