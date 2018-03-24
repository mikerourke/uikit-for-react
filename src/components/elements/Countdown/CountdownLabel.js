import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'CountdownLabel',
  className: 'uk-comment-label',
  asType: customPropTypes.customOrStringElement('div', 'span'),
});
