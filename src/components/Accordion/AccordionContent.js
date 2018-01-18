import React from 'react';
import classnames from 'classnames';
import { Block } from '../Base';

const AccordionContent = ({ className, ...rest }) => (
  <Block
    {...rest}
    className={classnames(className, AccordionContent.meta.ukClass)}
  />
);

AccordionContent.propTypes = Block.propTypes;

AccordionContent.meta = {
  name: 'AccordionContent',
  ukClass: 'uk-accordion-content',
};

export default AccordionContent;
