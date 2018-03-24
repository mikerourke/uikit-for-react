import { customPropTypes, HTML } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'ModalBody',
  className: 'uk-modal-body',
  asType: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
});
