/**
 * Returns a createElement() type based on the props of the Component.
 * Useful for calculating what type a component should render as.
 * Note: This code is based off of the getElementType function from the semantic-ui-react library.
 * @see https://github.com/Semantic-Org/Semantic-UI-React/blob/master/src/lib/getElementType.js
 *
 * @param {function} Component A function or ReactClass.
 * @param {string} asProp Value of the component's "as" prop.
 * @returns {string|function} A ReactElement type
 */
const getElementType = (Component, asProp) => {
  const { defaultProps = {} } = Component;

  if (asProp === '') return defaultProps.as;

  // User defined "as" element type:
  if (asProp !== defaultProps.as) return asProp;

  // Use defaultProp or 'div'
  return defaultProps.as || 'div';
};

export default getElementType;
