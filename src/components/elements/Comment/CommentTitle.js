import { customPropTypes, HTML } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'CommentTitle',
  className: 'uk-comment-title',
  asType: customPropTypes.customOrStringElement(HTML.HEADING_ELEMENTS),
  asDefault: 'h4',
});
