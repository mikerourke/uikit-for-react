import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'CommentAvatar',
  className: 'uk-comment-avatar',
  asType: customPropTypes.customOrStringElement('img'),
  asDefault: 'img',
});
