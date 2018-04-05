import generate from 'nanoid/generate';
import { VALID_CHARS } from './constants';

/**
 * This function generates a random ID for adding to DOM elements when
 * selection functionality is required.
 * @returns {string}
 */
export const generateIdentifier = () => {
  const generated = generate(VALID_CHARS, 8);
  return `iuikfr-${generated}`;
};

/**
 * This function generates a CSS class name for adding to DOM elements when
 * selection functionality is required.
 * @returns {string}
 */
export const generateSelector = () => {
  const generated = generate(VALID_CHARS, 8);
  return `suikfr-${generated}`;
};
