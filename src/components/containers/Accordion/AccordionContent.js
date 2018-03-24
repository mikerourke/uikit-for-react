import { customPropTypes, HTML } from '../../../lib';
import { getCustomBase } from '../../base';

/**
 * Content part for each accordion item.
 * @see https://getuikit.com/docs/accordion#usage
 */
export default getCustomBase({
  displayName: 'AccordionContent',
  className: 'uk-accordion-content',
  asType: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
});
