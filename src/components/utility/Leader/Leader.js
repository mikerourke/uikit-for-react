import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import {
  customPropTypes,
  getElementType,
  getOptionsString,
  HTML,
  UIK,
} from '../../../lib';
import { Flex, Inverse, Margin, Text, Width } from '../../common';

export default class Leader extends React.Component {
  static displayName = 'Leader';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    fill: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    media: PropTypes.oneOfType([
      ExtraPropTypes.nonNegativeInteger,
      PropTypes.oneOf(UIK.BREAKPOINTS),
      PropTypes.string,
    ]),
    text: Text.propTypes,
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
      fill,
      inverse,
      media,
      flex,
      margin,
      text,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Width.getClasses(width),
    );

    const componentOptions = getOptionsString({ fill, media });

    const Element = getElementType(Leader, as);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        data-uk-leader={componentOptions}
      />
    );
  }
}
