import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
  getOptionsString,
  UIK,
} from '../../lib';
import { InlineElement } from '../Base';

export default class Icon extends InlineElement {
  static meta = {
    name: 'Icon',
    ukClass: 'uk-icon',
  };

  static propTypes = {
    ...InlineElement.propTypes,
    as: PropTypes.oneOf(['a', 'span']),
    children: PropTypes.node,
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
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

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
      inheritedClasses,
      Icon.meta.ukClass,
      {
        [buildClassName(Icon.meta.ukClass, 'link')]: (link),
      },
    );

    const componentOptions = getOptionsString({
      icon: name,
      ratio,
    });

    const Element = getElementType(Icon, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        data-uk-icon={componentOptions}
        {...inheritedAttributes}
      >
        {children}
      </Element>
    );
  }
}
