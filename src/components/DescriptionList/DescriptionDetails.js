import React from 'react';
import { BlockElement } from '../Base';

const DescriptionDetails = props => (
  <BlockElement
    {...props}
    as="dd"
  />
);

DescriptionDetails.propTypes = BlockElement.propTypes;

DescriptionDetails.meta = {
  name: 'DescriptionDetails',
};

export default DescriptionDetails;
