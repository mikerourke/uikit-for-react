import React from 'react';
import compact from 'lodash/compact';
import first from 'lodash/first';
import get from 'lodash/get';
import isString from 'lodash/isString';

/**
 * Loops through the children of a React component recursively and applies the
 * specified callback function.
 * @param {React.Children} children React children components to loop through.
 * @param {Function} callback Function to apply to the children.
 * @returns {any[]}
 */
const recurseChildren = (children, callback) =>
  React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;

    let updatedChild = child;
    const grandchildren = get(child, ['props', 'children'], []);
    if (grandchildren.length !== 0) {
      updatedChild = React.cloneElement(child, {
        children: recurseChildren(grandchildren, callback),
      });
    }
    return callback(updatedChild);
  });

const getIfNameMatchesType = (child, childTypeName) => {
  const possibleNames = [
    get(child, ['type', 'displayName'], null),
    get(child, ['type', 'name'], null),
    get(child, ['props', 'as', 'displayName'], null),
    get(child, ['props', 'as', 'name'], null),
  ];
  const validNames = compact(possibleNames);
  return validNames.includes(childTypeName);
};

/**
 * Returns true if the specified child matches the specified type, or if the
 *    element's "as" component matches the specified type.
 * @param {React.Node} child React component/element to check.
 * @param childType Component type to check for.
 * @returns {boolean}
 */
export const childMatchesType = (child, childType) =>
  isString(childType)
    ? getIfNameMatchesType(child, childType)
    : child.type === childType;

/**
 * Returns true if the specified children for the parent component contains an
 * instance of the specified type of component (passed as instance of React
 * component).
 * @param {React.Children} children Children prop from parent React component.
 * @param {React.Element|Function|string} childType Component to check for the
 *    existence of.
 * @returns {boolean}
 */
export const hasChildType = (children, childType) => {
  let countOfChildType = 0;
  recurseChildren(children, child => {
    if (childMatchesType(child, childType)) countOfChildType += 1;
  });
  return countOfChildType > 0;
};

/**
 * Returns the child/children of the type specfied within the parent React
 * component.
 * @param {React.Children} children Children prop from parent React component.
 * @param {React.Element|string} childType Component or name of instances to
 *    return.
 * @returns {*}
 */
export const findChildByType = (children, childType) => {
  const childrenOfType = [];
  recurseChildren(children, child => {
    if (childMatchesType(child, childType)) childrenOfType.push(child);
  });
  if (childrenOfType.length === 0) return null;
  return childrenOfType.length === 1 ? first(childrenOfType) : childrenOfType;
};

/**
 * Evaluates the children specified and returns true if any of the child
 *    elements has the specified CSS class name.
 * @param {React.Children} children Children prop from parent React component.
 * @param {string} className Class name to find in the child elements.
 * @returns {boolean}
 */
export const childrenHaveClass = (children, className) => {
  let classCount = 0;
  const classRegex = new RegExp(className, 'g');
  React.Children.forEach(children, child => {
    if (React.isValidElement(child)) {
      if (classRegex.test(child.className)) classCount += 1;
    }
  });
  return classCount !== 0;
};

/**
 * Renders the contents of the navigation item (i.e. DotnavItem, NavItem, etc)
 *    based on the specified props. The default behavior per the docs is to
 *    render an anchor tag within a <li>. This function determines the item
 *    to render based on the specified conditions.
 * @param {React.Children} children Children associated with the React
 *    component.
 * @param {string} [href="#"] Anchor href prop to apply to the inner element.
 * @param {boolean} [isSpan=false] Indicates if the child element should be
 *    rendered as a <span> (rather than <a>).
 * @returns {React.Children}
 */
export const renderNavigationChild = (
  children,
  { href = '#', isSpan = false } = {},
) => {
  const childElements = React.Children.toArray(children);
  const firstElement = first(childElements);

  if (get(firstElement, 'type', '') !== 'a') {
    const InnerElement = isSpan ? 'span' : 'a';
    return <InnerElement href={href}>{children}</InnerElement>;
  }

  return children;
};
