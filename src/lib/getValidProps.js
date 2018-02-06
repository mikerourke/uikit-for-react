import { has } from 'lodash';

/**
 * Returns an object with valid (non-custom) props based on the defaultProps
 *    of the specified components.
 * @param {React.Component} Component Component with props to evaluate.
 * @param {Object} props Props associated with component.
 */
export default function getValidProps(Component, props) {
  const { defaultProps = {} } = Component;
  return Object.keys(props).reduce((acc, propName) => {
    const isIncluded = propName === 'children' || propName === 'className';
    if (has(defaultProps, propName) && !isIncluded) return acc;
    return {
      ...acc,
      [propName]: props[propName],
    };
  }, {});
}
