import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

/**
 * Toggle for each accordion item.
 * @see https://getuikit.com/docs/accordion#usage
 */
export default getCustomBase({
  displayName: 'AccordionTitle',
  className: 'uk-accordion-title',
  asType: customPropTypes.customOrStringElement('a'),
  asDefault: 'a',
});
