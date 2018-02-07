import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import { Align, Flex, Margin, Text, Width } from '../../common';

export default class Logo extends React.Component {
  static displayName = 'Logo';

  static propTypes = {
    align: Align.propTypes,
    as: customPropTypes.customOrStringElement(HTML.INLINE_ELEMENTS),
    className: PropTypes.string,
    flex: Flex.propTypes,
    imgSrc: PropTypes.string,
    inverse: PropTypes.bool,
    margin: Margin.propTypes,
    text: Text.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'a',
    className: '',
    inverse: false,
  };

  render() {
    const {
      align,
      as,
      className,
      flex,
      margin,
      text,
      width,
      imgSrc,
      inverse,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-logo',
      Align.getClasses(align),
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Width.getClasses(width),
    );

    const Element = getElementType(Logo, as);
    return (
      <Element {...rest} className={classes}>
        {imgSrc && <img src={imgSrc} alt="" />}
        {inverse && <img className="uk-logo-inverse" src={imgSrc} alt="" />}
      </Element>
    );
  }
}
