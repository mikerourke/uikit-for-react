import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  HTML,
  UIK,
} from '../../../lib';
import { Flex, Inverse, Margin, Text, Width } from '../../common';

export default class Hidden extends React.Component {
  static displayName = 'Hidden';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    breakpoint: PropTypes.oneOf(UIK.BREAKPOINTS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    hide: PropTypes.bool,
    margin: Margin.propTypes,
    noTouchOnly: PropTypes.bool,
    touchOnly: PropTypes.bool,
    whenHovered: PropTypes.oneOf(['hidden', 'invisible']),
    text: Text.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    hide: false,
    noTouchOnly: false,
    touchOnly: false,
  };

  render() {
    const {
      as,
      breakpoint,
      className,
      flex,
      inverse,
      hide,
      margin,
      noTouchOnly,
      touchOnly,
      whenHovered,
      text,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildClassName(whenHovered, 'hover'),
      buildClassName('hidden', breakpoint),
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Width.getClasses(width),
      {
        'uk-hidden': hide,
        'uk-hidden-notouch': noTouchOnly,
        'uk-hidden-touch': touchOnly,
      },
    );

    const Element = getElementType(Hidden, as);
    return <Element {...rest} className={classes} hidden={hide || undefined} />;
  }
}
