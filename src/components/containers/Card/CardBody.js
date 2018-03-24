import { customPropTypes, HTML } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'CardBody',
  className: 'uk-card-body',
  asType: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
});
