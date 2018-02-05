import PropTypes from 'prop-types';
import { get } from 'lodash';
import { getOptionsString } from '../../lib';

const propShape = {
  animate: PropTypes.object,
  easing: PropTypes.number,
  media: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  target: PropTypes.string,
  viewport: PropTypes.number,
};

const propTypes = PropTypes.shape(propShape);

const getOptions = (parallaxProp = {}) =>
  getOptionsString({
    ...get(parallaxProp, 'animate', {}),
    easing: get(parallaxProp, 'easing'),
    media: get(parallaxProp, 'media'),
    target: get(parallaxProp, 'target'),
    viewport: get(parallaxProp, 'viewport'),
  });

export default {
  propShape,
  propTypes,
  getOptions,
};
