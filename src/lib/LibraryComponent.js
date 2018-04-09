import generate from 'nanoid/generate';
import isNil from 'lodash/isNil';
import { VALID_CHARS } from './constants';

const getCssSelector = componentName => `[data-uikfr-${componentName}]`;

/**
 * This class is used as a utility by library components that require
 *    added functionality or need to be selected from the DOM.
 * @class
 */
export default class LibraryComponent {
  static findAllWithName(componentName) {
    const cssSelector = getCssSelector(componentName);
    return document.querySelectorAll(cssSelector);
  }

  static findFirstWithName(componentName) {
    const cssSelector = getCssSelector(componentName);
    return document.querySelector(cssSelector);
  }

  constructor(componentName) {
    this.componentName = componentName;
    this.attrValue = `${componentName}-${generate(VALID_CHARS, 5)}`;
  }

  get domNode() {
    return document.querySelector(this.cssSelector);
  }

  get attrName() {
    return `data-uikfr-${this.componentName}`;
  }

  get cssSelector() {
    return `[${this.attrName}="${this.attrValue}"]`;
  }

  findFirstChildWithName(childComponentName) {
    const childCssSelector = getCssSelector(childComponentName);
    return this.domNode.querySelector(childCssSelector);
  }

  findAllChildrenWithName(childComponentName) {
    const childCssSelector = getCssSelector(childComponentName);
    return this.domNode.querySelectorAll(childCssSelector);
  }

  /**
   * Appends the "data-uikfr-..." attribute to the component to ensure it is
   *    selectable.
   * @param {Object} componentProps Props of the component.
   * @param {string} [attrValue=""] Optional override value for the data
   *    attribute added to the DOM element.
   */
  appendProps(componentProps, { attrValue = null } = {}) {
    if (!isNil(attrValue)) this.attrValue = attrValue;
    return {
      [this.attrName]: this.attrValue,
    };
  }
}
