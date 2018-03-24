import { customPropTypes, HTML } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'ModalContent',
  asType: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
});
