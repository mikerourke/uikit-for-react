import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';
import { buildClassName } from '../../lib';
import { Block } from '../Base';

export default class AccordionItem extends Block {
  static meta = {
    name: 'AccordionItem',
  };

  static propTypes = {
    ...Block.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    content: PropTypes.node,
    open: PropTypes.bool,
    title: PropTypes.node,
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
      content,
      open,
      title,
      ...rest
    } = unhandledProps;

    if (!isNil(children) && (!isNil(content) || !isNil(title))) {
      throw new Error('You cannot specify children with content and title in Accordion.');
    }
    if (isNil(children) && (isNil(content) || isNil(title))) {
      throw new Error('You must specify a title and content, ensure you specified both for Accordion.');
    }

    const classes = classnames(
      className,
      blockClasses,
      AccordionItem.meta.ukClass,
      {
        [buildClassName('open')]: (open),
      },
    );

    return (
      <li
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        {...attributes}
      >
        {(title) && <AccordionTitle>{title}</AccordionTitle>}
        {(content) && <AccordionContent>{content}</AccordionContent>}
        {(children) && children}
      </li>
    );
  }
}
