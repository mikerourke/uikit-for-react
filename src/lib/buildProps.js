import {
  first,
  flatten,
  get, isArray,
  isBoolean,
  isNil,
  isNull,
  isPlainObject,
  isUndefined,
  kebabCase,
  keys,
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
    // This removes any invalid trailing "-".
    .replace(/-$/g, '')
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
  if (classElements.length === 1) {
    const classElement = first(classElements);
    return (isNil(classElement)) ? '' : sanitizeClassName(classElement);
  }

  // If an element has a value of "grid" for the "margin" prop, the values need to be reversed
  // to form the correct class name.
  if (classElements.join('-').includes('margin-grid')) return 'uk-grid-margin';

  const getIsClassElementInvalid = element => (
    (isUndefined(element) || element === false || isPlainObject(element))
  );
  if (some(classElements, getIsClassElementInvalid)) return '';

  const classString = classElements
    .reduce((acc, element) => {
      if (isBoolean(element)) return acc;
      if (element === 'name') return acc;
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

/**
 * Returns a valid breakpoint value based on the specified propName.
 * @param {string} propName Name of the breakpoint prop to sanitize.
 * @returns {string}
 *
 * @example
 * const propName = "atMd";
 * console.log(getSanitizedBreakpoint(propName));
 * > @m
 */
const getSanitizedBreakpoint = (propName) => {
  const validName = propName.toLowerCase().replace('at', '@');

  // Each breakpoint (with the exception of @xl) needs to be trimmed down to only the first letter.
  if (!validName.includes('xl')) return validName.slice(0, -1);
  return validName;
};

/**
 * Builds the class names from an object prop constructed from the key and value of the object.
 * @param {Array|string} ukNames Name(s) to use when building the class name.
 * @param {Object} objectProp Prop used to build the class names.
 * @returns {Array}
 */
const buildObjectClassNames = (ukNames, objectProp) => (
  keys(objectProp).map((propName) => {
    if (propName.length === 1) return '';
    const propValue = get(objectProp, propName);
    if (propName === 'position') return buildPositionClassNames(ukNames, propValue);
    let suffix = propName;

    // This is done to ensure the breakpoint value is valid.
    if (startsWith(propName, 'at')) suffix = getSanitizedBreakpoint(propName);
    return buildClassName(ukNames, propValue, suffix);
  })
);

/**
 * Builds the class names that correspond with the "background" prop specified in the component.
 *    This has a special handler because the blend mode, breakpoint, and size need to be
 *    constructed.
 * @param {Object} backgroundProps "background" prop from the component.
 * @returns {string[]}
 */
const buildBackgroundClassNames = (backgroundProps) => {
  const validProps = pick(backgroundProps, ['fixed', 'norepeat', 'position']);
  return [
    ...buildObjectClassNames('background', validProps),
    buildClassName('background', 'blend', get(backgroundProps, 'blendMode')),
    buildClassName('background', 'image', get(backgroundProps, 'breakpoint')),
    buildClassName('background', get(backgroundProps, 'size')),
  ];
};

const buildBoxShadowClassNames = (boxShadowProps) => [
  buildClassName('box', 'shadow', boxShadowProps),
  buildClassName('box', 'shadow', get(boxShadowProps, 'size')),
  buildClassName('box', 'shadow', 'hover', get(boxShadowProps, 'hoverSize')),
  buildClassName('box', 'shadow', 'bottom', get(boxShadowProps, 'bottom')),
];

/**
 * Builds the class names that correspond with the "margin" prop specified in the component.
 *   This has a special handler because specifying a size for "all" will apply the margin to
 *   all sides.
 * @param {Object} marginProps "margin" prop from the component.
 * @returns {string[]}
 *
 * @example
 * const marginProps = { all: "large" };
 * console.log(buildMarginClassNames(marginProps));
 * > ['uk-margin-large-top', 'uk-margin-large-bottom', 'uk-margin-large-right', 'uk-margin-large-left']
 */
const buildMarginClassNames = (marginProps) => {
  const marginAllProp = get(marginProps, 'all', null);
  return (isNull(marginAllProp))
    ? buildObjectClassNames('margin', marginProps)
    : UIK.LOCATIONS.map(location => buildClassName('margin', marginAllProp, location));
};

/**
 * Loops through the keys associated with the specified prop value and builds the class
 *    names with the appropriate values based on the key. If the prop is a string or boolean value,
 *    it returns the built class value.
 * @param {Object} args Class name elements and object prop (last argument).
 * @returns {Array|string}
 *
 * @example
 * this.props.width.breakpoint = { atSm: '1/2', atMd: '1/5' };
 * console.log(buildObjectOrValueClassNames('width', this.props.width.breakpoint));
 * > ['uk-width-1-2@s', 'uk-width-1-5@m']
 */
export const buildObjectOrValueClassNames = (...args) => {
  const ukNames = Array.from(args);
  // The last argument should be the object prop from the component.
  const objectProp = (ukNames.length > 1) ? ukNames.pop() : first(ukNames);

  // If the last argument isn't a plain object, treat it as a string or boolean.
  if (!isPlainObject(objectProp)) return buildClassName(ukNames, objectProp);

  // Determine if a special className build function is required.
  const firstUkName = first(ukNames);
  if (firstUkName === 'background') return buildBackgroundClassNames(objectProp);
  if (firstUkName === 'boxShadow') return buildBoxShadowClassNames(objectProp);
  if (firstUkName === 'margin') return buildMarginClassNames(objectProp);
  return buildObjectClassNames(ukNames, objectProp);
};

export const buildStyles = (props) => {
  const style = get(props, 'style', {});
  const imageUrl = get(props, ['background', 'imageUrl'], null);

  return {
    ...style,
    backgroundImage: (isNull(imageUrl)) ? undefined : `url(${imageUrl})`,
  };
};

export const joinListProp = (prop, separator = ' ') => {
  if (isNil(prop)) return '';
  if (!isArray(prop)) return prop;
  return flatten([prop]).join(separator);
};
