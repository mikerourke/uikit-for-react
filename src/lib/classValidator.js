import { concat, difference, split, uniq } from 'lodash';

const ALIGN_CLASSES = [
  'uk-align-left',
  'uk-align-right',
  'uk-align-center',
  'uk-align-left@s',
  'uk-align-right@s',
  'uk-align-left@m',
  'uk-align-right@m',
  'uk-align-left@l',
  'uk-align-right@l',
  'uk-align-left@xl',
  'uk-align-right@xl',
];

const ANIMATION_CLASSES = [
  'uk-animation-fade',
  'uk-animation-scale-up',
  'uk-animation-scale-down',
  'uk-animation-slide-top',
  'uk-animation-slide-bottom',
  'uk-animation-slide-left',
  'uk-animation-slide-right',
  'uk-animation-slide-top-small',
  'uk-animation-slide-bottom-small',
  'uk-animation-slide-left-small',
  'uk-animation-slide-right-small',
  'uk-animation-slide-top-medium',
  'uk-animation-slide-bottom-medium',
  'uk-animation-slide-left-medium',
  'uk-animation-slide-right-medium',
  'uk-animation-kenburns',
  'uk-animation-shake',
  'uk-animation-reverse',
  'uk-animation-fast',
];

const BACKGROUND_CLASSES = [
  'uk-background-default',
  'uk-background-muted',
  'uk-background-primary',
  'uk-background-secondary',
  'uk-background-cover',
  'uk-background-contain',
  'uk-background-top-left',
  'uk-background-top-center',
  'uk-background-top-right',
  'uk-background-center-left',
  'uk-background-center-center',
  'uk-background-center-right',
  'uk-background-bottom-left',
  'uk-background-bottom-center',
  'uk-background-bottom-right',
  'uk-background-norepeat',
  'uk-background-fixed',
  'uk-background-image@s',
  'uk-background-image@m',
  'uk-background-image@l',
  'uk-background-image@xl',
  'uk-background-blend-multiply',
  'uk-background-blend-screen',
  'uk-background-blend-overlay',
  'uk-background-blend-darken',
  'uk-background-blend-lighten',
  'uk-background-blend-color-dodge',
  'uk-background-blend-color-burn',
  'uk-background-blend-hard-light',
  'uk-background-blend-soft-light',
  'uk-background-blend-difference',
  'uk-background-blend-exclusion',
  'uk-background-blend-hue',
  'uk-background-blend-saturation',
  'uk-background-blend-color',
  'uk-background-blend-luminosity',
];

const MARGIN_CLASSES = [
  'uk-margin',
  'uk-margin-top',
  'uk-margin-bottom',
  'uk-margin-left',
  'uk-margin-right',
  'uk-margin-small',
  'uk-margin-small-top',
  'uk-margin-small-bottom',
  'uk-margin-small-left',
  'uk-margin-small-right',
  'uk-margin-medium',
  'uk-margin-medium-top',
  'uk-margin-medium-bottom',
  'uk-margin-medium-left',
  'uk-margin-medium-right',
  'uk-margin-large',
  'uk-margin-large-top',
  'uk-margin-large-bottom',
  'uk-margin-large-left',
  'uk-margin-large-right',
  'uk-margin-xlarge',
  'uk-margin-xlarge-top',
  'uk-margin-xlarge-bottom',
  'uk-margin-xlarge-left',
  'uk-margin-xlarge-right',
  'uk-margin-remove',
  'uk-margin-remove-top',
  'uk-margin-remove-bottom',
  'uk-margin-remove-left',
  'uk-margin-remove-right',
  'uk-margin-remove-vertical',
  'uk-margin-remove-adjacent',
  'uk-margin-auto',
  'uk-margin-auto-top',
  'uk-margin-auto-bottom',
  'uk-margin-auto-left',
  'uk-margin-auto-right',
  'uk-margin-auto-vertical',
];

const PADDING_CLASSES = [
  'uk-padding',
  'uk-padding-small',
  'uk-padding-large',
  'uk-padding-remove',
  'uk-padding-remove-top',
  'uk-padding-remove-bottom',
  'uk-padding-remove-left',
  'uk-padding-remove-right',
  'uk-padding-remove-vertical',
  'uk-padding-remove-horizontal',
];

const TRANSITION_CLASSES = [
  'uk-transition-fade',
  'uk-transition-scale-up',
  'uk-transition-scale-down',
  'uk-transition-slide-top',
  'uk-transition-slide-bottom',
  'uk-transition-slide-left',
  'uk-transition-slide-right',
  'uk-transition-slide-top-small',
  'uk-transition-slide-bottom-small',
  'uk-transition-slide-left-small',
  'uk-transition-slide-right-small',
  'uk-transition-slide-top-medium',
  'uk-transition-slide-bottom-medium',
  'uk-transition-slide-left-medium',
  'uk-transition-slide-right-medium',
];

const validateClasses = (classList, overrideEnv = false) => {
  if (process.env.NODE_ENV !== 'development' || overrideEnv === false) return;

  const allValidClasses = concat(
    ALIGN_CLASSES,
    ANIMATION_CLASSES,
    BACKGROUND_CLASSES,
    MARGIN_CLASSES,
    PADDING_CLASSES,
    TRANSITION_CLASSES,
  );

  const providedClasses = split(classList, ' ');
  const classesToValidate = uniq(providedClasses).filter(className => (className.length !== 0));
  const invalidClasses = difference(classesToValidate, allValidClasses);
  // TODO: Do something snazzier with this.
  if (invalidClasses.length > 0) console.error(`Invalid classes: ${invalidClasses}`);
};

export default validateClasses;
