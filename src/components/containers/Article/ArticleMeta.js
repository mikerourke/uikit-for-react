import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'ArticleMeta',
  className: 'uk-article-meta',
  asType: customPropTypes.customOrStringElement('p'),
  asDefault: 'p',
});
