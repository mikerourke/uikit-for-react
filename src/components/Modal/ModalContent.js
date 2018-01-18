import React from 'react';
import { Block } from '../Base';

const ModalContent = props => (
  <Block {...props} />
);

ModalContent.propTypes = Block.propTypes;

ModalContent.meta = {
  name: 'ModalContent',
};

export default ModalContent;
