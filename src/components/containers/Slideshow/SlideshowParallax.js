/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import { Parallax } from '../../common';

export default class SlideshowParallax extends React.Component {
  static displayName = 'SlideshowParallax';

  static propTypes = {
    ...Parallax.propShape,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, ...rest } = this.props;
    const componentOptions = Parallax.getOptions(rest);
    const elementProps = omit(rest, Object.keys(Parallax.propShape));
    const Element = getElementType(SlideshowParallax, as);
    return (
      <Element
        {...elementProps}
        data-uk-slideshow-parallax={componentOptions}
      />
    );
  }
}
