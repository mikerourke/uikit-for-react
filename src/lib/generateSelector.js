import generate from 'nanoid/generate';

/**
 * This function generates a CSS class name for adding to DOM elements when selection functionality
 *    is required.
 * @returns {string}
 */
const generateSelector = () => {
  const validChars = '1234567890abcdefghijklmnopqrstuvwxyz_';
  const generated = generate(validChars, 10);
  return `ukfr_${generated}`;
};

export default generateSelector;
