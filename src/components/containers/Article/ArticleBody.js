import { customPropTypes, HTML } from '../../../lib';
import { getCustomBase } from '../../base';

/**
 * Contents/body of the Article.
 * @see https://getuikit.com/docs/article
 */
export default getCustomBase({
  displayName: 'ArticleBody',
  asType: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
  asDefault: 'p',
});
