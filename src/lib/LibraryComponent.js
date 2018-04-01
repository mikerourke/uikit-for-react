import generate from 'nanoid/generate';
import isNil from 'lodash/isNil';
import { VALID_CHARS } from './constants';

export default class LibraryComponent {
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

  appendProps(componentProps, { attrValue = null } = {}) {
    if (!isNil(attrValue)) this.attrValue = attrValue;
    return {
      [this.attrName]: this.attrValue,
    };
  }
}
