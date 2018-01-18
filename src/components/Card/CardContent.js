import React from 'react';
import { Block } from '../Base';

const CardContent = props => (
  <Block {...props} />
);

CardContent.propTypes = Block.propTypes;

CardContent.defaultProps = {
  as: 'p',
};

CardContent.meta = {
  name: 'CardContent',
};

export default CardContent;
