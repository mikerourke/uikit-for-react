import generate from 'nanoid/generate';

/**
 * This function generates a random ID for adding to DOM elements when
 * selection functionality is required.
 * @returns {string}
 */
export const generateIdentifier = () => {
  const validChars = '1234567890abcdefghijklmnopqrstuvwxyz-';
  const generated = generate(validChars, 8);
  return `iuikfr-${generated}`;
};

/**
 * This function generates a CSS class name for adding to DOM elements when
 * selection functionality is required.
 * @returns {string}
 */
export const generateSelector = () => {
  const validChars = '1234567890abcdefghijklmnopqrstuvwxyz-';
  const generated = generate(validChars, 10);
  return `suikfr-${generated}`;
};
