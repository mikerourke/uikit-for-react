import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import {
  buildClassName,
  getElementType,
  HTML,
  UIK,
} from '../../lib';
import { Inline } from '../Base';

export default class Text extends Inline {
  static meta = {
    name: 'Text',
    ukClass: 'uk-text',
  };

  static propTypes = {
    ...Inline.propTypes,
    as: PropTypes.oneOf([...HTML.TEXT_ELEMENTS, ...HTML.BLOCK_ELEMENTS]),
    bold: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    danger: PropTypes.bool,
    horizontalAlign: PropTypes.oneOfType([
      PropTypes.oneOf([...UIK.HORIZONTAL_POSITIONS, 'justify']),
      PropTypes.shape({
        atSm: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        atMd: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        atLg: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
        atXl: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
      }),
    ]),
    large: PropTypes.bool,
    lead: PropTypes.bool,
    meta: PropTypes.bool,
    muted: PropTypes.bool,
    primary: PropTypes.bool,
    small: PropTypes.bool,
    success: PropTypes.bool,
    transform: PropTypes.oneOf(['capitalize', 'lowercase', 'uppercase']),
    verticalAlign: PropTypes.oneOf(['baseline', 'top', 'middle', 'bottom']),
    warning: PropTypes.bool,
    wrapping: PropTypes.oneOf(['break', 'nowrap', 'truncate']),
  };

  static defaultProps = {
    as: 'div',
    bold: false,
    danger: false,
    large: false,
    lead: false,
    meta: false,
    muted: false,
    primary: false,
    small: false,
    success: false,
    warning: false,
  };

  render() {
    const {
      attributes,
      inlineClasses,
      inlineStyle,
      unhandledProps,
    } = this.getInlineElements(this.props);

    const {
      bold,
      children,
      className,
      danger,
      horizontalAlign,
      large,
      lead,
      meta,
      muted,
      primary,
      small,
      success,
      transform,
      verticalAlign,
      warning,
      wrapping,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inlineClasses,
      buildClassName(Text.meta.ukClass, horizontalAlign),
      buildClassName(Text.meta.ukClass, get(horizontalAlign, 'atSm'), '@s'),
      buildClassName(Text.meta.ukClass, get(horizontalAlign, 'atMd'), '@m'),
      buildClassName(Text.meta.ukClass, get(horizontalAlign, 'atLg'), '@l'),
      buildClassName(Text.meta.ukClass, get(horizontalAlign, 'atXl'), '@xl'),
      buildClassName(Text.meta.ukClass, transform),
      buildClassName(Text.meta.ukClass, verticalAlign),
      buildClassName(Text.meta.ukClass, wrapping),
      {
        [buildClassName(Text.meta.ukClass, 'bold')]: (bold),
        [buildClassName(Text.meta.ukClass, 'danger')]: (danger),
        [buildClassName(Text.meta.ukClass, 'large')]: (large),
        [buildClassName(Text.meta.ukClass, 'lead')]: (lead),
        [buildClassName(Text.meta.ukClass, 'meta')]: (meta),
        [buildClassName(Text.meta.ukClass, 'muted')]: (muted),
        [buildClassName(Text.meta.ukClass, 'primary')]: (primary),
        [buildClassName(Text.meta.ukClass, 'small')]: (small),
        [buildClassName(Text.meta.ukClass, 'success')]: (success),
        [buildClassName(Text.meta.ukClass, 'warning')]: (warning),
      },
    );

    const Element = getElementType(Text, this.props);
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
