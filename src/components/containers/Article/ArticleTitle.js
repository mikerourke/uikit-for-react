import { customPropTypes, HTML } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'ArticleTitle',
  className: 'uk-article-title',
  asType: customPropTypes.customOrStringElement(HTML.HEADING_ELEMENTS),
  asDefault: 'h1',
});
