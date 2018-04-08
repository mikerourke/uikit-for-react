/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import { customPropTypes, getOptionsString, HTML } from '../../lib';
import Base from '../Base';

export default class SlideshowParallax extends React.Component {
  static displayName = 'SlideshowParallax';

  static propTypes = {
    ...omit(Base.propTypes, 'parallax'),
    animate: PropTypes.object,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    easing: PropTypes.number,
    media: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    target: PropTypes.string,
    viewport: PropTypes.number,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const { animate, easing, media, target, viewport, ...rest } = this.props;

    const componentOptions = getOptionsString({
      ...animate,
      easing,
      media,
      target,
      viewport,
    });

    return (
      <Base
        {...rest}
        component={SlideshowParallax}
        uk-slideshow-parallax={componentOptions}
      />
    );
  }
}
