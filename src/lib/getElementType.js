import get from 'lodash/get';

/**
 * Returns a createElement() type based on the props of the Component.
 *    Useful for calculating what type a component should render as.
 *    Note: This code is based off of the getElementType function from the
 *    semantic-ui-react library.
 * @see https://github.com/Semantic-Org/Semantic-UI-React/blob/master/src/lib/getElementType.js
 *
 * @param {Function} Component A function or ReactClass.
 * @param {string|Function} asProp Value of the "as" prop.
 * @returns {string|function} A ReactElement type
 */
const getElementType = (Component, asProp) => {
  const defaultProps = get(Component, 'defaultProps', { as: '' });

  // User defined "as" element type:
  if (asProp && asProp !== defaultProps.as) return asProp;

  // If the "as" prop was defined, return it.
  if (defaultProps.as) return defaultProps.as;

  return 'div';
};

export default getElementType;
