import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'CommentHeader',
  className: 'uk-comment-header',
  asType: customPropTypes.customOrStringElement('header'),
  asDefault: 'header',
});
