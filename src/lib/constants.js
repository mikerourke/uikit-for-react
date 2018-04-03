const ICONS_APP = [
  'ban',
  'bell',
  'bolt',
  'bookmark',
  'calendar',
  'camera',
  'cart',
  'check',
  'clock',
  'close',
  'code',
  'cog',
  'comment',
  'commenting',
  'comments',
  'credit-card',
  'future',
  'git-branch',
  'git-fork',
  'grid',
  'happy',
  'hashtag',
  'heart',
  'history',
  'home',
  'image',
  'info',
  'lifesaver',
  'link',
  'list',
  'location',
  'lock',
  'mail',
  'menu',
  'minus',
  'minus-circle',
  'more',
  'more-vertical',
  'move',
  'nut',
  'paint-bucket',
  'pencil',
  'play',
  'play-circle',
  'plus',
  'plus-circle',
  'question',
  'receiver',
  'refresh',
  'rss',
  'search',
  'settings',
  'sign-in',
  'sign-out',
  'social',
  'star',
  'table',
  'tag',
  'thumbnails',
  'trash',
  'unlock',
  'user',
  'users',
  'warning',
  'world',
];

const ICONS_BRANDS = [
  '500px',
  'behance',
  'dribbble',
  'facebook',
  'flickr',
  'foursquare',
  'github',
  'github-alt',
  'gitter',
  'google',
  'google-plus',
  'instagram',
  'joomla',
  'linkedin',
  'pagekit',
  'pinterest',
  'soundcloud',
  'tripadvisor',
  'tumblr',
  'twitter',
  'uikit',
  'vimeo',
  'whatsapp',
  'wordpress',
  'xing',
  'yelp',
  'youtube',
];

const ICONS_DEVICES = [
  'desktop',
  'laptop',
  'phone',
  'phone-landscape',
  'tablet',
  'tablet-landscape',
  'tv',
];

const ICONS_DIRECTION = [
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'expand',
  'forward',
  'reply',
  'shrink',
  'triangle-down',
  'triangle-left',
  'triangle-right',
  'triangle-up',
];

const ICONS_EDITOR = [
  'bold',
  'italic',
  'strikethrough',
  'video-camera',
  'quote-right',
];

const ICONS_STORAGE = [
  'album',
  'cloud-download',
  'cloud-upload',
  'copy',
  'database',
  'download',
  'file',
  'file-edit',
  'folder',
  'pull',
  'push',
  'server',
  'upload',
];

const ICON_NAMES = [
  ...ICONS_APP,
  ...ICONS_BRANDS,
  ...ICONS_DEVICES,
  ...ICONS_DIRECTION,
  ...ICONS_EDITOR,
  ...ICONS_STORAGE,
];

const ANIMATIONS = [
  'fade',
  'scale-up',
  'scale-down',
  'shake',
  'slide-left',
  'slide-top',
  'slide-bottom',
  'slide-right',
  'slide-left-small',
  'slide-top-small',
  'slide-bottom-small',
  'slide-right-small',
  'slide-left-medium',
  'slide-top-medium',
  'slide-bottom-medium',
  'slide-right-medium',
  'kenburns',
];

const AREAS = ['horizontal', 'vertical'];

const BACKGROUND_COLORS = ['default', 'muted', 'primary', 'secondary'];

const BACKGROUND_SIZES = ['cover', 'contain'];

const BASE_SIZES = ['small', 'medium', 'large'];

const BASE_WIDTHS = ['1/2', '1/3', '1/4', '1/5', '1/6'];

const BLEND_MODES = [
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

const BREAKPOINTS = ['@s', '@m', '@l', '@xl'];

const BUTTON_STYLES = [
  'default',
  'primary',
  'secondary',
  'danger',
  'text',
  'link',
];

const CHILD_WIDTHS = [...BASE_WIDTHS, 'auto', 'expand'];

const CSS_POSITIONS = ['absolute', 'fixed', 'relative'];

const HORIZONTAL_POSITIONS = ['left', 'center', 'right'];

const DROP_POSITIONS = [
  'bottom-left',
  'bottom-center',
  'bottom-right',
  'bottom-justify',
  'top-left',
  'top-center',
  'top-right',
  'top-justify',
  'left-top',
  'left-center',
  'left-bottom',
  'right-top',
  'right-center',
  'right-bottom',
];

const FLEX_HORIZONTAL_MODIFIERS = [
  ...HORIZONTAL_POSITIONS,
  'around',
  'between',
];

const FLEX_VERTICAL_MODIFIERS = ['stretch', 'top', 'middle', 'bottom'];

const FORM_WIDTHS = [...BASE_SIZES, 'xsmall'];

const GRID_SIZES = [...BASE_SIZES, 'xlarge'];

const LIGHTBOX_ANIMATIONS = ['fade', 'scale', 'slide'];

const LOCATIONS = ['top', 'bottom', 'left', 'right'];

const MODES = ['click', 'hover'];

const SLIDESHOW_ANIMATIONS = ['fade', 'pull', 'push', 'scale', 'slide'];

const SPACING_MODIFIERS = [...BASE_SIZES, 'auto', 'remove', 'xlarge'];

const STATUS_COLORS = ['muted', 'primary', 'success', 'warning', 'danger'];

const TEXT_ALIGNMENTS = [...HORIZONTAL_POSITIONS, 'justify'];

const TEXT_VERTICAL_MODIFIERS = ['baseline', 'top', 'middle', 'bottom'];

const VERTICAL_POSITIONS = ['top', 'center', 'bottom'];

const X_Y_POSITIONS = [
  'top-left',
  'top-center',
  'top-right',
  'center-left',
  'center-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

const ALL_WIDTHS = [
  ...CHILD_WIDTHS,
  ...BASE_SIZES,
  '2/3',
  '2/4',
  '3/4',
  '2/5',
  '3/5',
  '4/5',
  '2/6',
  '3/6',
  '4/6',
  '5/6',
  'xlarge',
  'xxlarge',
];

export const UIK = {
  ALL_WIDTHS,
  ANIMATIONS,
  AREAS,
  BACKGROUND_COLORS,
  BACKGROUND_SIZES,
  BASE_SIZES,
  BASE_WIDTHS,
  BLEND_MODES,
  BREAKPOINTS,
  BUTTON_STYLES,
  CHILD_WIDTHS,
  CSS_POSITIONS,
  DROP_POSITIONS,
  FLEX_HORIZONTAL_MODIFIERS,
  FLEX_VERTICAL_MODIFIERS,
  FORM_WIDTHS,
  GRID_SIZES,
  HORIZONTAL_POSITIONS,
  ICON_NAMES,
  LIGHTBOX_ANIMATIONS,
  LOCATIONS,
  MODES,
  SLIDESHOW_ANIMATIONS,
  SPACING_MODIFIERS,
  STATUS_COLORS,
  TEXT_ALIGNMENTS,
  TEXT_VERTICAL_MODIFIERS,
  VERTICAL_POSITIONS,
  X_Y_POSITIONS,
};

const HTML_BLOCK_ELEMENTS = [
  'address',
  'article',
  'aside',
  'blockquote',
  'canvas',
  'dd',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hgroup',
  'hr',
  'li',
  'main',
  'nav',
  'noscript',
  'ol',
  'output',
  'p',
  'pre',
  'section',
  'table',
  'tfoot',
  'ul',
  'video',
];

const HTML_EMBEDDED_ELEMENTS = ['audio', 'canvas', 'img', 'svg', 'video'];

const HTML_FORM_ELEMENTS = [
  'button',
  'datalist',
  'fieldset',
  'form',
  'input',
  'keygen',
  'label',
  'legend',
  'meter',
  'optgroup',
  'option',
  'output',
  'progress',
  'select',
  'textarea',
];

const HTML_HEADING_ELEMENTS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const HTML_INLINE_ELEMENTS = [
  'a',
  'abbr',
  'acronym',
  'b',
  'bdo',
  'big',
  'br',
  'button',
  'cite',
  'code',
  'dfn',
  'em',
  'i',
  'img',
  'input',
  'kbd',
  'label',
  'map',
  'object',
  'q',
  'samp',
  'script',
  'select',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'textarea',
  'time',
  'tt',
  'var',
  'progress',
];

const HTML_INPUT_TYPES = [
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'Note',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week',
];

const HTML_TEXT_ELEMENTS = [
  'abbr',
  'b',
  'cite',
  'code',
  'del',
  'dfn',
  'em',
  'i',
  'ins',
  'kbd',
  'mark',
  'q',
  's',
  'samp',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'u',
  'var',
];

export const HTML = {
  ALL_ELEMENTS: [
    ...HTML_BLOCK_ELEMENTS,
    ...HTML_EMBEDDED_ELEMENTS,
    ...HTML_FORM_ELEMENTS,
    ...HTML_INLINE_ELEMENTS,
    ...HTML_TEXT_ELEMENTS,
    'iframe',
    'source',
  ],
  BLOCK_ELEMENTS: HTML_BLOCK_ELEMENTS,
  EMBEDDED_ELEMENTS: HTML_EMBEDDED_ELEMENTS,
  FORM_ELEMENTS: HTML_FORM_ELEMENTS,
  HEADING_ELEMENTS: HTML_HEADING_ELEMENTS,
  INLINE_ELEMENTS: HTML_INLINE_ELEMENTS,
  INPUT_TYPES: HTML_INPUT_TYPES,
  TEXT_ELEMENTS: HTML_TEXT_ELEMENTS,
  CSS_EASING: ['ease', 'ease-in', 'ease-out', 'ease-in-out'],
};

export const VALID_CHARS = '1234567890abcdefghijklmnopqrstuvwxyz-';
