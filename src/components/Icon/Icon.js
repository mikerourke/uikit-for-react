import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
  getOptionsString,
  UIK,
} from '../../lib';
import { Inline } from '../Base';

export default class Icon extends Inline {
  static meta = {
    name: 'Icon',
    ukClass: 'uk-icon',
  };

  static propTypes = {
    ...Inline.propTypes,
    as: PropTypes.oneOf(['a', 'span']),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    link: PropTypes.bool,
    name: PropTypes.oneOf(UIK.ICON_NAMES),
    ratio: PropTypes.number,
  };

  static defaultProps = {
    as: 'span',
    link: false,
  };

  render() {
    const {
      inlineClasses,
      inlineStyle,
      unhandledProps,
    } = this.getInlineElements(this.props);

    const {
      as,
      children,
      className,
      link,
      name,
      ratio,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inlineClasses,
      Icon.meta.ukClass,
      {
        [buildClassName(Icon.meta.ukClass, 'link')]: (link),
      },
    );

    const attributeOptions = getOptionsString({
      icon: name,
      ratio,
    });

    const Element = getElementType(Icon, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={inlineStyle}
        data-uk-icon={attributeOptions}
      >
        {children}
      </Element>
    );
  }
}
