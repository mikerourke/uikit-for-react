// TODO: Test and validate this.
import tokenizer from 'css-selector-tokenizer';

/**
 * Creates a CSS selector by combining the initial selector and any additional
 *    classes specified in ...args.
 * @param {string} selector Initial selector specified by user.
 * @param args Additional classes to append to selector.
 */
export default function buildSelector(selector, ...args) {
  const classElements = [...args];
  const parsedSelector = tokenizer.parse(selector);
  const selectorDefinition = {
    type: 'selectors',
    nodes: [
      ...parsedSelector.nodes,
      {
        type: 'selector',
        nodes: classElements.map(name => ({
          type: 'class',
          name,
        })),
      },
    ],
  };
  return tokenizer.stringify(selectorDefinition);
}
