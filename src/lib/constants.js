const CHILD_WIDTHS = ['1/2', '1/3', '1/4', '1/5', '1/6', 'auto', 'expand'];
const HORIZONTAL_POSITIONS = ['left', 'center', 'right'];
const SIZES = ['small', 'medium', 'large', 'xlarge'];

export const UIK = {
  ANIMATIONS: [
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
  ],
  BACKGROUND_COLORS: ['default', 'muted', 'primary', 'secondary'],
  BACKGROUND_SIZES: ['cover', 'contain'],
  BASE_WIDTHS: [
    ...CHILD_WIDTHS,
    ...SIZES,
    '2/3', '2/4', '3/4', '2/5', '3/5', '4/5', '2/6', '3/6', '4/6', '5/6',
    'xxlarge',
  ],
  CHILD_WIDTHS,
  BLEND_MODES: [
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
  ],
  BREAKPOINTS: ['@s', '@m', '@l', '@xl'],
  BUTTON_STYLES: ['default', 'primary', 'secondary', 'danger', 'text', 'link'],
  FLEX_HORIZONTAL_MODIFIERS: [...HORIZONTAL_POSITIONS, 'around', 'between'],
  FLEX_VERTICAL_MODIFIERS: ['stretch', 'top', 'middle', 'bottom'],
  GRID_CHILD_COLUMNS: [1, 2, 3, 4, 5, 6],
  GRID_COLUMNS: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  HORIZONTAL_POSITIONS,
  LOCATIONS: ['top', 'bottom', 'left', 'right'],
  CSS_POSITIONS: ['absolute', 'fixed', 'relative'],
  SIZES: ['small', 'medium', 'large', 'xlarge'],
  SPACING_MODIFIERS: [...SIZES, 'remove', 'auto'],
  TEXT_COLORS: ['muted', 'primary', 'success', 'warning', 'danger'],
  TEXT_VERTICAL_MODIFIERS: ['baseline', 'top', 'middle', 'bottom'],
  VERTICAL_POSITIONS: ['top', 'center', 'bottom'],
};

const HTML_BLOCK_ELEMENTS = [
  'address', 'article', 'aside', 'blockquote', 'canvas', 'dd', 'div', 'dl', 'dt', 'fieldset',
  'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header',
  'hgroup', 'hr', 'li', 'main', 'nav', 'noscript', 'ol', 'output', 'p', 'pre', 'section',
  'table', 'tfoot', 'ul', 'video',
];

const HTML_EMBEDDED_ELEMENTS = ['audio', 'canvas', 'img', 'svg', 'video'];

const HTML_HEADING_ELEMENTS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const HTML_INLINE_ELEMENTS = [
  'a', 'abbr', 'acronym', 'b', 'bdo', 'big', 'br', 'button', 'cite', 'code', 'dfn', 'em', 'i',
  'img', 'input', 'kbd', 'label', 'map', 'object', 'q', 'samp', 'script', 'select', 'small',
  'span', 'strong', 'sub', 'sup', 'textarea', 'time', 'tt', 'var',
];

const HTML_TEXT_ELEMENTS = [
  'abbr', 'b', 'cite', 'code', 'del', 'dfn', 'em', 'i', 'ins', 'kbd', 'mark', 'q', 's', 'samp',
  'small', 'span', 'strong', 'sub', 'sup', 'u', 'var',
];

export const HTML = {
  ALL_ELEMENTS: [
    ...HTML_BLOCK_ELEMENTS,
    ...HTML_EMBEDDED_ELEMENTS,
    ...HTML_INLINE_ELEMENTS,
    ...HTML_TEXT_ELEMENTS,
  ],
  BLOCK_ELEMENTS: HTML_BLOCK_ELEMENTS,
  EMBEDDED_ELEMENTS: HTML_EMBEDDED_ELEMENTS,
  HEADING_ELEMENTS: HTML_HEADING_ELEMENTS,
  INLINE_ELEMENTS: HTML_INLINE_ELEMENTS,
  TEXT_ELEMENTS: HTML_TEXT_ELEMENTS,
};
