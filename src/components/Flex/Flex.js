import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import {
  buildClassName,
  getElementType,
} from '../../lib';
import { Block } from '../Base';

export default class Flex extends Block {
  static meta = {
    name: 'Flex',
    ukClass: 'uk-flex',
  };

  static propTypes = {
    ...omit(Block.propTypes, 'flex'),
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
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      children,
      className,
      inline,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
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
        style={blockStyle}
        {...attributes}
      >
        {children}
      </Element>
    );
  }
}
