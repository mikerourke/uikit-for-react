import generate from 'nanoid/generate';
import { VALID_CHARS } from './constants';

/**
 * This function generates a random identifier for adding to DOM elements when
 *    selection functionality is required.
 * @returns {string}
 */
export default function generateIdentifier() {
  const generated = generate(VALID_CHARS, 6);
  return `uikfr-${generated}`;
}
