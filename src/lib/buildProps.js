import {
  first,
  flatten,
  get,
  isBoolean,
  isNil,
  isNull,
  isPlainObject,
  isUndefined,
  kebabCase,
  keys,
  omit,
  pick,
  some,
  startsWith,
} from 'lodash';
import { UIK } from './constants';

/**
 * Loops through the props for the component and determines if the "default" class should be
 *    applied. This is determined by whether any of the boolean style props is set to true.
 * @param {Object} props Props associated with the component
 * @returns {boolean}
 *
 * @example
 * <Button primary />
 * > This would return false for checkIfDefaultStyle because primary = true.
 *
 * <Button margin />
 * > This would return true for checkIfDefaultStyle because no style boolean was set.
 */
export const getIfDefaultStyle = (props) => {
  const booleanCount = UIK.BUTTON_STYLES.reduce((acc, styleName) => {
    const hasStyle = get(props, styleName, false);
    return (hasStyle) ? (acc + 1) : acc;
  }, 0);
  return (booleanCount === 0);
};

/**
 * Cleans up the className to ensure it is a valid UIkit class.
 * @param {string} className Name of the class to sanitize.
 * @returns {string}
 */
const sanitizeClassName = className => (
  `uk-${className}`
  // This removes any duplicate "uk-" to ensure the class name is valid.
    .replace(/(uk-)(?=.*\1)/ig, '')
    // This removes extra dashes left by a boolean value (we don't want the word "true" included)
    // as well as spaces or trailing dashes.
    .replace(/(--)(-$)( )/ig, '')
    // This removes the dash before a breakpoint value.
    .replace(/-@/ig, '@')
);

/**
 * Returns a valid UIkit class name to apply to the component.
 * @param {*} args Class elements used to build the class string.
 * @returns {string}
 *
 * @example
 * <Button primary />
 * console.log(getUkClassName('button', 'primary'));
 * > uk-button-primary
 *
 * <Panel background={{ blend: 'multiply' }} />
 * console.log(getUkClassName('background', 'blend', 'multiply'));
 * > uk-background-blend-multiply
 */
export const buildClassName = (...args) => {
  if (isUndefined(args)) throw new Error('Missing class element in buildClassName');

  const classElements = flatten([...args]);
  if (classElements.length === 1) return sanitizeClassName(first(classElements));

  const getIsClassElementInvalid = element => (
    (isNil(element) || element === false || isPlainObject(element))
  );
  if (some(classElements, getIsClassElementInvalid)) return '';

  const classString = classElements
    .reduce((acc, element) => {
      if (isBoolean(element)) return acc;
      if (element === 'nameOf') return acc;
      const validElement = (/@/.test(element)) ? element : kebabCase(element);
      return [
        ...acc,
        validElement,
      ];
    }, [])
    .join('-');

  return sanitizeClassName(classString);
};

/**
 * Returns the UIkit class name(s) that corresponds to a specific position.
 * @param {string} ukName String value to prepend to the class.
 * @param {Object} positionProp Prop containing the position key/value pairs (horizontal, vertical).
 * @returns {string|Array}
 *
 * @example
 * this.props.background = { horizontal: 'left', vertical: 'top' };
 * console.log(buildPositionClassNames('background', this.props.background));
 * > uk-background-top-left
 */
export const buildPositionClassNames = (ukName, positionProp) => {
  if (isNil(positionProp)) return '';
  if (!isPlainObject(positionProp)) return buildClassName(ukName, positionProp);

  const isNotPosition = (ukName !== 'position');
  const vertProp = get(positionProp, 'vertical', null);
  const horizProp = get(positionProp, 'horizontal', null);

  // If both the horizontal and vertical props are set to "center", for the transform-origin
  // return an empty string.
  if (ukName === 'transform-origin' && (vertProp === 'center' && horizProp === 'center')) return '';

  const positionLocationClass = buildClassName([
    ukName,
    vertProp,
    // When setting the "position" prop for a base element, if both horizontal and vertical are
    // centered, only one "center" is required (uk-position-center).  If it's not a base element
    // (e.g. background position), both "center" values are included (uk-background-center-center).
    (isNotPosition && horizProp === 'center') ? 'center' : null,
  ]);

  if (isNotPosition) return positionLocationClass;
  return [
    positionLocationClass,
    buildClassName(ukName, get(positionProp, 'marginSize', null)),
    buildClassName(ukName, get(positionProp, 'cssClass', null)),
    buildClassName(ukName, 'z', 'index', get(positionProp, 'zIndexOfOne', null)),
  ];
};

const buildObjectClassNames = (ukName, objectProp) => keys(objectProp).map((propName) => {
  if (propName.length === 1) return '';
  const propValue = get(objectProp, propName);
  if (propName === 'position') return buildPositionClassNames(ukName, propValue);
  let suffix = propName;
  // This is done to ensure the breakpoint value is valid.
  if (startsWith(propName, 'at')) suffix = propName.toLowerCase().replace('at', '@');
  return buildClassName(ukName, propValue, suffix);
});

const buildBackgroundClassNames = (backgroundProps) => {
  const validProps = pick(backgroundProps, ['fixed', 'norepeat', 'position']);
  return [
    ...buildObjectClassNames('background', validProps),
    buildClassName('background', 'blend', get(backgroundProps, 'blendMode')),
    buildClassName('background', 'image', get(backgroundProps, 'breakpoint')),
    buildClassName('background', get(backgroundProps, 'size')),
  ];
};

const buildFlexItemClassNames = (flexItemProps) => {
  const orderProp = get(flexItemProps, 'order');
  const orderClassNames = (isPlainObject(orderProp))
    ? buildObjectClassNames('flex', orderProp)
    : [buildClassName(orderProp)];

  return [
    ...orderClassNames,
    buildClassName('flex', get(flexItemProps, 'grow').replace('flex', '1')),
  ];
};

const buildMarginClassNames = (marginProps) => {
  const marginAllProp = get(marginProps, 'all', null);
  const validProps = omit(marginProps, ['container', 'firstColumn', 'nextRow']);
  return (isNull(marginAllProp))
    ? buildObjectClassNames('margin', validProps)
    : UIK.LOCATIONS.map(location => buildClassName('margin', marginAllProp, location));
};

/**
 * Loops through the keys associated with the specified prop value and builds the class
 *    names with the appropriate values based on the key. If the prop is a string or boolean value,
 *    it returns the built class value.
 * @param {string} ukName String value to prepend to the class.
 * @param {Object} objectProp Object prop associated with the component.
 * @returns {Array|string}
 *
 * @example
 * this.props.width.breakpoint = { atS: '1/2', atM: '1/5' };
 * console.log(buildObjectOrValueClassNames('width', this.props.width.breakpoint));
 * > ['uk-width-1-2@s', 'uk-width-1-5@m']
 */
export const buildObjectOrValueClassNames = (ukName, objectProp) => {
  if (!isPlainObject(objectProp)) return buildClassName(ukName, objectProp);
  if (ukName === 'background') return buildBackgroundClassNames(objectProp);
  if (ukName === 'flexItem') return buildFlexItemClassNames(objectProp);
  if (ukName === 'margin') return buildMarginClassNames(objectProp);
  return buildObjectClassNames(ukName, objectProp);
};

export const buildStyles = (props) => {
  const style = get(props, 'style', {});
  const imageUrl = get(props, ['background', 'imageUrl'], null);

  return {
    ...style,
    backgroundImage: (isNull(imageUrl)) ? undefined : `url(${imageUrl})`,
  };
};
