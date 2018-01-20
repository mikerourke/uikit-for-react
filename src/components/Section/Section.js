import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
  UIK,
} from '../../lib';
import { Block } from '../Base';

export default class Section extends Block {
  static meta = {
    name: 'Section',
    ukClass: 'uk-section',
  };

  static propTypes = {
    ...Block.propTypes,
    background: PropTypes.oneOf(UIK.BACKGROUND_COLORS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    overlap: PropTypes.bool,
    padding: PropTypes.oneOf([
      'xsmall',
      'small',
      'large',
      'xlarge',
      'remove',
    ]),
    preserveColor: PropTypes.bool,
  };

  static defaultProps = {
    overlap: false,
    preserveColor: false,
  };

  render() {
    const { background, padding } = this.props;

    const {
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

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
      blockClasses,
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
        style={blockStyle}
        {...attributes}
      >
        {children}
      </Element>
    );
  }
}
