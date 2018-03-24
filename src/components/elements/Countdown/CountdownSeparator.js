import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'CountdownSeparator',
  className: 'uk-countdown-separator',
  asType: customPropTypes.customOrStringElement('div', 'span'),
});
