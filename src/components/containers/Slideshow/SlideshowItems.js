import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'SlideshowItems',
  className: 'uk-slideshow-items',
  asType: customPropTypes.customOrStringElement('ul'),
  asDefault: 'ul',
});
