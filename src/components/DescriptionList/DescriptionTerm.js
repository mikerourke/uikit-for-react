import React from 'react';
import { omit } from 'lodash';
import { Block } from '../Base';

const DescriptionTerm = props => (
  <Block
    {...props}
    as="dt"
  />
);

DescriptionTerm.propTypes = omit(Block.propTypes, 'as');

DescriptionTerm.meta = {
  name: 'DescriptionTerm',
};

export default DescriptionTerm;
