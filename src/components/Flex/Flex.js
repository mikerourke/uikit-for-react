import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import {
  buildClassName,
  getElementType,
} from '../../lib';
import { BlockElement } from '../Base';

export default class Flex extends BlockElement {
  static meta = {
    name: 'Flex',
    ukClass: 'uk-flex',
  };

  static propTypes = {
    ...omit(BlockElement.propTypes, 'flex'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    inline: PropTypes.bool,
  };

  static defaultProps = {
    as: 'div',
    inline: false,
  };

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      children,
      className,
      inline,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      Flex.meta.ukClass,
      {
        [buildClassName(Flex.meta.ukClass, 'inline')]: (inline),
      },
    );

    const Element = getElementType(Flex, this.props);
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
