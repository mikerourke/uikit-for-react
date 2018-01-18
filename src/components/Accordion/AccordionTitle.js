import React from 'react';
import classnames from 'classnames';
import { Inline } from '../Base';

const AccordionTitle = ({ className, ...rest }) => (
  <Inline
    {...rest}
    as="a"
    className={classnames(className, AccordionTitle.meta.ukClass)}
  />
);

AccordionTitle.propTypes = Inline.propTypes;

AccordionTitle.meta = {
  name: 'AccordionTitle',
  ukClass: 'uk-accordion-title',
};

export default AccordionTitle;
