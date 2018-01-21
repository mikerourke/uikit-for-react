import * as React from 'react';
import classnames from 'classnames';
import { first, get, isString } from 'lodash';

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

/**
 * Determines if the specified child React element is of the type specified.
 * Since the childType argument can either be a string or a React element, it
 * needs to be evaluated for each condition.
 * @param {React.Element} child React component to evaluate.
 * @param {React.Element|string} childType String or element to compare to
 *    specified child.
 * @returns {boolean}
 */
const getIfIsOfType = (child, childType) =>
  isString(childType)
    ? get(child, ['type', 'meta', 'name'], '') === childType
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
export const getIfHasChildType = (children, childType) => {
  let countOfChildType = 0;
  recurseChildren(children, child => {
    if (getIfIsOfType(child, childType)) countOfChildType += 1;
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
    if (getIfIsOfType(child, childType)) childrenOfType.push(child);
  });
  return childrenOfType.length === 1 ? first(childrenOfType) : childrenOfType;
};

/**
 * Loops through the children of a React component recursively and adds the
 * specified class names to the component whose name matches the key in the
 * childOptions object.
 * @param {React.Children} children Children prop from parent React component.
 * @param {Object} childOptions Component name and class name to append to
 *    child.
 * @returns {Array}
 *
 * @example
 * Component:
 * renderChildren = () =>
 *   appendClassNamesToChildren(this.props.children, { Grid: 'uk-drop-grid });
 * <Drop>
 *   {this.renderChildren()}
 * </Drop
 *
 * When rendered:
 * <Drop>
 *   <Card>
 *     <Grid className="uk-drop-grid">
 *       ...
 *     </Grid>
 *   </Card>
 * </Drop>
 */
export const appendClassNamesToChildren = (children, childOptions) =>
  React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;

    const name = get(child, ['type', 'meta', 'name'], '');
    const classToAppend = get(childOptions, name);
    return React.cloneElement(child, {
      className: classnames(child.className, classToAppend),
      children: appendClassNamesToChildren(child.props.children, childOptions),
    });
  });

export const getIfChildrenHaveClass = (children, className) => {
  let classCount = 0;
  const classRegex = new RegExp(className, 'g');
  React.Children.forEach(children, child => {
    if (React.isValidElement(child)) {
      if (classRegex.test(child.className)) classCount += 1;
    }
  });
  return classCount !== 0;
};
