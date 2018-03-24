import { customPropTypes } from '../../../lib';
import { getCustomBase } from '../../base';

export default getCustomBase({
  displayName: 'FormLegend',
  className: 'uk-legend',
  asType: customPropTypes.customOrStringElement('legend'),
  asDefault: 'legend',
});
