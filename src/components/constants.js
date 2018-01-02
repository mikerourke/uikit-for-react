export const STYLES = [
  'default',
  'primary',
  'secondary',
  'danger',
  'text',
  'link',
];

export const SIZES = ['small', 'medium', 'large', 'xlarge'];

export const SPACING_LOCATIONS = ['top', 'bottom', 'left', 'right'];

export const SPACING_MODIFIERS = [...SIZES, 'remove', 'auto'];

export const BACKGROUND_COLORS = ['default', 'muted', 'primary', 'secondary'];

export const BACKGROUND_SIZES = ['cover', 'contain'];

export const HORIZONTAL_POSITIONS = ['left', 'center', 'right'];

export const VERTICAL_POSITIONS = ['top', 'center', 'bottom'];

export const BREAKPOINTS = ['@s', '@m', '@l', '@xl'];

export const BLEND_MODES = [
  'multiply',
  'screen',
  'overlay',
  'darken',
  'lighten',
  'color-dodge',
  'color-burn',
  'hard-light',
  'soft-light',
  'difference',
  'exclusion',
  'hue',
  'saturation',
  'color',
  'luminosity',
];

export const ANIMATIONS = [
  'fade',
  'scale-up',
  'scale-down',
  'slide-top',
  'slide-bottom',
  'slide-left',
  'slide-right',
  'slide-top-small',
  'slide-bottom-small',
  'slide-left-small',
  'slide-right-small',
  'slide-top-medium',
  'slide-bottom-medium',
  'slide-left-medium',
  'slide-right-medium',
  'kenburns',
  'shake',
];

const HTML4_BLOCK_ELEMENTS = [
  'address',
  'blockquote',
  'dd',
  'div',
  'dl',
  'dt',
  'fieldset',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hr',
  'li',
  'main',
  'nav',
  'noscript',
  'ol',
  'p',
  'pre',
  'table',
  'tfoot',
  'ul',
];

const HTML5_BLOCK_ELEMENTS = [
  'article',
  'aside',
  'canvas',
  'figcaption',
  'figure',
  'footer',
  'header',
  'hgroup',
  'output',
  'section',
  'video',
];

export const HTML_BLOCK_ELEMENTS = [...HTML4_BLOCK_ELEMENTS, HTML5_BLOCK_ELEMENTS];


export const CHILD_WIDTHS = ['1/2', '1/3', '1/4', '1/5', '1/6', 'auto', 'expand'];

export const BASE_WIDTHS = [
  ...CHILD_WIDTHS,
  ...SIZES,
  '2/3', '2/4', '3/4', '2/5', '3/5', '4/5', '2/6', '3/6', '4/6', '5/6',
  'xxlarge',
];

export const COLUMN_WIDTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const FLEX_HORIZONTAL_MODIFIERS = ['around', 'between', 'left', 'center', 'right'];

export const FLEX_VERTICAL_MODIFIERS = ['stretch', 'top', 'middle', 'bottom'];
