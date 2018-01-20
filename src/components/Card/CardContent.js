import React from 'react';
import { BlockElement } from '../Base';

const CardContent = props => (
  <BlockElement {...props} />
);

CardContent.propTypes = BlockElement.propTypes;

CardContent.defaultProps = {
  as: 'p',
};

CardContent.meta = {
  name: 'CardContent',
};

export default CardContent;
