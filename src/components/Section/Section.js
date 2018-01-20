import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
  UIK,
} from '../../lib';
import { BlockElement } from '../Base';

export default class Section extends BlockElement {
  static meta = {
    name: 'Section',
    ukClass: 'uk-section',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    background: PropTypes.oneOf(UIK.BACKGROUND_COLORS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    overlap: PropTypes.bool,
    padding: PropTypes.oneOf(['xsmall', 'small', 'large', 'xlarge', 'remove']),
    preserveColor: PropTypes.bool,
  };

  static defaultProps = {
    overlap: false,
    preserveColor: false,
  };

  render() {
    // This is done to ensure the props don't get handled by the Base/BlockElement props parser.
    const {
      background,
      padding,
      ...propsToParse
    } = this.props;

    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(propsToParse);

    const {
      children,
      className,
      overlap,
      preserveColor,
      ...rest
    } = unhandledProps;

    const paddingClass = padding.replace('remove', 'remove-vertical');
    const classes = classnames(
      className,
      inheritedClasses,
      Section.meta.ukClass,
      buildClassName(Section.meta.ukClass, background),
      buildClassName(Section.meta.ukClass, paddingClass),
      {
        [buildClassName(Section.meta.ukClass, 'overlap')]: (overlap),
        [buildClassName(Section.meta.ukClass, 'preserve', 'color')]: (preserveColor),
      },
    );

    const Element = getElementType(Section, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {children}
      </Element>
    );
  }
}
