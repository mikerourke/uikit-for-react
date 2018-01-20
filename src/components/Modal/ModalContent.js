import React from 'react';
import { BlockElement } from '../Base';

const ModalContent = props => <BlockElement {...props} />;

ModalContent.propTypes = BlockElement.propTypes;

ModalContent.meta = {
  name: 'ModalContent',
};

export default ModalContent;
