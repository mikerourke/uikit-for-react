/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import {
  Flex,
  Inverse,
  Margin,
  Parallax,
  Text,
  Utility,
  Width,
} from '../../common';

export default class SlideshowParallax extends React.Component {
  static displayName = 'SlideshowParallax';

  static propTypes = {
    ...Parallax.propShape,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    text: Text.propTypes,
    utility: Utility.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const {
      as,
      className,
      flex,
      inverse,
      margin,
      text,
      utility,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
      Width.getClasses(width),
    );

    const componentOptions = Parallax.getOptions(rest);
    const Element = getElementType(SlideshowParallax, as);
    const elementProps = omit(rest, Object.keys(Parallax.propShape));
    return (
      <Element
        {...elementProps}
        className={classes || undefined}
        data-uk-slideshow-parallax={componentOptions}
      />
    );
  }
}
