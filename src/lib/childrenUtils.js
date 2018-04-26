import React from 'react';
import classnames from 'classnames';
import first from 'lodash/first';
import get from 'lodash/get';
import isNil from 'lodash/isNil';

/**
 * Loops through the children of a React component recursively and applies the
 *   specified callback function.
 * @param {React.Children} children React children components to loop through.
 * @param {Function} callback Function to apply to the children.
 * @returns {any[]}
 */
export const recurseChildren = (children, callback) =>
  React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;

    let updatedChild = child;
    const grandchildren = get(child, ['props', 'children']);
    if (grandchildren) {
      updatedChild = React.cloneElement(child, {
        children: recurseChildren(grandchildren, callback),
      });
    }
    return callback(updatedChild);
  });

/**
 * Recursively gets all of the children within the specified children
 *    argument and returns as an array.
 * @param {React.Children} children Children from component.
 * @return {Array}
 */
export const getAllChildren = children => {
  const runningChildren = [];
  recurseChildren(children, child => {
    runningChildren.push(child);
    return child;
  });
  return runningChildren;
};

/**
 * Returns the type name of the child (for a component) as well as the "as"
 *    type name (if applicable).
 * @param {React.Node} child Child to evaluate.
 * @returns {{typeName: *, asTypeName: *}}
 */
export const getChildTypeNames = child => ({
  typeName: get(child, ['type', 'name'], ''),
  asTypeName: get(child, ['props', 'as', 'name'], ''),
});

export const childTypeNameLike = (child, regex) => {
  const { typeName, asTypeName } = getChildTypeNames(child);
  return regex.test(typeName) || regex.test(asTypeName);
};

/**
 * Returns true if the specified child matches the specified type, or if the
 *    element's "as" component matches the specified type.
 * @param {React.Node} child React component/element to check.
 * @param {string|Object} [childType] Component type to check for.
 * @returns {boolean}
 */
export const childMatchesType = (child, childType) => {
  if (isNil(childType)) return false;
  const { typeName, asTypeName } = getChildTypeNames(child);
  const childTypeName = get(childType, 'name');
  return (
    childType === typeName ||
    childType === asTypeName ||
    childType === get(child, 'type') ||
    childTypeName === typeName ||
    childTypeName === asTypeName
  );
};

/**
 * Returns true if the specified child matches one of the specified types, or
 *    if the element's "as" component matches one of the specified types.
 * @param {React.Node} child React component/element to check.
 * @param {Array} childTypes Component types to check for.
 * @returns {boolean}
 */
export const childMatchesOneOfTypes = (child, childTypes) => {
  const countFound = childTypes.reduce(
    (acc, childType) => (childMatchesType(child, childType) ? acc + 1 : acc),
    0,
  );
  return countFound > 0;
};

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

/**
 * Adds a selector to the "target" prop of a Toggle element within a toggleable
 *    container and appends the selector to the "className" prop of the Target
 *    element.
 * @param {React.Children} children Children associated with the React
 *    component.
 * @param {string} targetName Name of target (toggled) component (e.g.
 *    "Offcanvas").
 * @param {string} toggleName Name of the toggling component (e.g.
 *    "OffcanvasToggle").
 * @param {string} linkingClass Class name to append to the attributes of the
 *    toggled and toggling elements.
 */
export const renderToggleChildren = (
  children,
  targetName,
  toggleName,
  linkingClass,
) => {
  const getLinkingClass = child => {
    const toggleIndex = get(child, ['props', 'toggleIndex']);
    return isNil(toggleIndex) ? linkingClass : `${linkingClass}-${toggleIndex}`;
  };

  return recurseChildren(children, child => {
    const classToUse = getLinkingClass(child);

    if (childMatchesType(child, targetName)) {
      return React.cloneElement(child, {
        className: classnames(child.props.className, classToUse),
      });
    }
    if (childMatchesType(child, toggleName)) {
      return React.cloneElement(child, {
        target: `.${classToUse}`,
      });
    }
    return child;
  });
};
