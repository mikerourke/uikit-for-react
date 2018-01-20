import React from 'react';
import { omit } from 'lodash';
import { Block } from '../Base';

const DescriptionDetails = props => (
  <Block
    {...props}
    as="dd"
  />
);

DescriptionDetails.propTypes = omit(Block.propTypes, 'as');

DescriptionDetails.meta = {
  name: 'DescriptionDetails',
};

export default DescriptionDetails;
