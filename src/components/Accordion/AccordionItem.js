import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';
import { buildClassName, restrictToChildTypes } from '../../lib';
import { BlockElement } from '../Base';

/**
 * Component with the required Content and Title elements.
 * @see https://getuikit.com/docs/accordion#usage
 */
export default class AccordionItem extends BlockElement {
  static meta = {
    name: 'AccordionItem',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    children: restrictToChildTypes([AccordionContent, AccordionTitle]),
    className: PropTypes.string,
    content: PropTypes.node,
    open: PropTypes.bool,
    title: PropTypes.node,
  };

  render() {
    const { children, className, content, open, title, ...rest } = this.props;

    if (!isNil(children) && (!isNil(content) || !isNil(title))) {
      throw new Error(
        'You cannot specify children with content and title in Accordion.',
      );
    }
    if (isNil(children) && (isNil(content) || isNil(title))) {
      throw new Error(
        'You must specify a title and content, ensure you specified both for Accordion.',
      );
    }

    const classes = classnames(className, AccordionItem.meta.ukClass, {
      [buildClassName('open')]: open,
    });

    return (
      <BlockElement {...rest} as="li" className={classes || undefined}>
        {title && <AccordionTitle>{title}</AccordionTitle>}
        {content && <AccordionContent>{content}</AccordionContent>}
        {children && children}
      </BlockElement>
    );
  }
}
