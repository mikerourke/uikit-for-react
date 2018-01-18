import React from 'react';
import { Block } from '../Base';

const DescriptionDetails = props => (
  <Block
    {...props}
    as="dd"
  />
);

DescriptionDetails.propTypes = {
  ...Block.propTypes,
  as: undefined,
};

DescriptionDetails.meta = {
  name: 'DescriptionDetails',
};

export default DescriptionDetails;
