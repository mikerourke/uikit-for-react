import { get } from 'lodash';

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
  const { defaultProps = {} } = Component;

  // User defined "as" element type:
  if (asProp && asProp !== defaultProps.as) return asProp;

  // If the "as" prop was defined, return it.
  if (defaultProps.as) return defaultProps.as;

  // If no "as" prop was defined, determine if the component inherits one of
  // the base elements. The default Inline element is a <span>, all others can
  // be a <div>.
  return get(Component, 'displayName') === 'InlineElement' ? 'span' : 'div';
};

export default getElementType;
