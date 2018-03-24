import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'CommentMeta',
  className: 'uk-comment-meta',
  asType: customPropTypes.customOrStringElement('p', 'ul'),
  asDefault: 'p',
});
