import React from 'react';
import { Block } from '../Base';

const DescriptionTerm = props => (
  <Block
    {...props}
    as="dt"
  />
);

DescriptionTerm.propTypes = {
  ...Block.propTypes,
  as: undefined,
};

DescriptionTerm.meta = {
  name: 'DescriptionTerm',
};

export default DescriptionTerm;
