/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { getElementType, getOptionsString } from '../../../lib';
import { BaseElement } from '../../base';

export default class SlideshowParallax extends React.Component {
  static displayName = 'SlideshowParallax';

  static propTypes = {
    animate: PropTypes.object,
    as: BaseElement.asPropType,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    easing: PropTypes.number,
    media: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    target: PropTypes.string,
    viewport: PropTypes.number,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    easing: 1,
    viewport: 1,
  };

  render() {
    const {
      as,
      animate,
      easing,
      media,
      target,
      viewport,
      ...rest
    } = this.props;

    const componentOptions = getOptionsString({
      ...animate,
      easing,
      media,
      target,
      viewport,
    });

    const Element = getElementType(SlideshowParallax, this.props);
    return <Element {...rest} data-uk-slideshow-parallax={componentOptions} />;
  }
}
