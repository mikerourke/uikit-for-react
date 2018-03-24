import { customPropTypes, HTML } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'CommentBody',
  className: 'uk-comment-body',
  asType: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
});
