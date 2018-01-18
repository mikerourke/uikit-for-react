import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, trim } from 'lodash';
import {
  buildClassName,
  getElementType,
  HTML,
  UIK,
} from '../../lib';
import Base from './Base';

export default class Inline extends Base {
  static meta = {
    name: 'Inline',
  };

  static propTypes = {
    ...Base.propTypes,
    align: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
      PropTypes.shape({
        atSm: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        atMd: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        atLg: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        atXl: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
      }),
    ]),
    as: PropTypes.oneOfType([
      PropTypes.oneOf(HTML.INLINE_ELEMENTS),
      PropTypes.element,
      PropTypes.func,
    ]),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'span',
  };

  getInlineElements(props) {
    const {
      attributes,
      baseClasses,
      baseStyle,
      unhandledProps,
    } = this.getBaseElements(props);

    const {
      align,
      as,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      baseClasses,
      buildClassName('align', align),
      buildClassName('align', get(align, 'atSm'), '@s'),
      buildClassName('align', get(align, 'atMd'), '@m'),
      buildClassName('align', get(align, 'atLg'), '@l'),
      buildClassName('align', get(align, 'atXl'), '@xl'),
    );

    return {
      attributes,
      inlineClasses: trim(classes),
      inlineStyle: baseStyle,
      unhandledProps: rest,
    };
  }

  render() {
    const {
      attributes,
      inlineClasses,
      inlineStyle,
      unhandledProps,
    } = this.getInlineElements(this.props);

    const {
      children,
      className,
      ...rest
    } = unhandledProps;

    const classes = classnames(className, inlineClasses);

    const Element = getElementType(Inline, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={inlineStyle}
        {...attributes}
      >
        {children}
      </Element>
    );
  }
}
