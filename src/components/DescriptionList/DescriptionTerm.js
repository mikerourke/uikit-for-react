import React from 'react';
import { BlockElement } from '../Base';

const DescriptionTerm = props => (
  <BlockElement
    {...props}
    as="dt"
  />
);

DescriptionTerm.propTypes = BlockElement.propTypes;

DescriptionTerm.meta = {
  name: 'DescriptionTerm',
};

export default DescriptionTerm;
