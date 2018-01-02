import {
  flatten,
  get,
  isBoolean,
  isNull,
  isObjectLike,
  isUndefined,
  kebabCase,
  keys,
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
  const getIsClassElementInvalid = element => (
    (isNull(element) || isUndefined(element) || element === false || isObjectLike(element))
  );
  if (some(classElements, getIsClassElementInvalid)) return '';


  const classString = classElements
    .reduce((acc, element) => {
      if (isBoolean(element)) return acc;
      const validElement = (/@/.test(element)) ? element : kebabCase(element);
      return [
        ...acc,
        validElement,
      ];
    }, [])
    .join('-');
  const ukClass = `uk-${classString}`;

  return ukClass
    // This removes any duplicate "uk-" to ensure the class name is valid.
    .replace(/(uk-)(?=.*\1)/ig, '')
    // This removes extra dashes left by a boolean value (we don't want the word "true" included)
    // as well as spaces or trailing dashes.
    .replace(/(--)(-$)( )/ig, '')
    // This removes the dash before a breakpoint value.
    .replace(/-@/ig, '@');
};

/**
 * Returns the UIkit class name(s) that corresponds to a specific position.
 * @param {string} ukName String value to prepend to the class.
 * @param {Object} positionProp Prop containing the position key/value pairs (horizontal, vertical).
 * @param {Object} options Additional options for returning class names.
 * @returns {string|Array}
 *
 * @example
 * this.props.background = { horizontal: 'left', vertical: 'top' };
 * console.log(buildPositionClassNames(this.props.background, 'background'));
 * > uk-background-top-left
 */
export const buildPositionClassNames = (ukName, positionProp, options = { omitCenter: false }) => {
  if (isNull(positionProp) || isUndefined(positionProp)) return '';
  if (!isObjectLike(positionProp)) return buildClassName(ukName, positionProp);

  const isNotPosition = (ukName !== 'position');
  const vertProp = get(positionProp, 'vertical', null);
  const horizProp = get(positionProp, 'horizontal', null);

  // If the "omitCenter" is set to true in the options parameter and both the horizontal and
  // vertical props are set to "center", return an empty string. This is used for the
  // transform-origin prop.
  if (options.omitCenter === true && (vertProp === 'center' && horizProp === 'center')) return '';

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
  if (!isObjectLike(objectProp)) return buildClassName(ukName, objectProp);

  return keys(objectProp).map((propName) => {
    if (propName.length === 1) return '';
    let suffix = propName;
    // This is done to ensure the breakpoint value is valid.
    if (startsWith(propName, 'at')) suffix = propName.toLowerCase().replace('at', '@');
    return buildClassName(ukName, get(objectProp, propName), suffix);
  });
};
