import { customPropTypes, HTML } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'CardTitle',
  className: 'uk-card-title',
  asType: customPropTypes.customOrStringElement(HTML.HEADING_ELEMENTS),
  asDefault: 'h3',
});
