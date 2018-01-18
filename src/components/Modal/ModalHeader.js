import React from 'react';
import classnames from 'classnames';
import { Block } from '../Base';

const ModalHeader = ({ className, ...rest }) => (
  <Block
    {...rest}
    as="div"
    className={classnames(className, ModalHeader.meta.ukClass)}
  />
);

ModalHeader.propTypes = {
  ...Block.propTypes,
  as: undefined,
};

ModalHeader.meta = {
  name: 'ModalHeader',
  ukClass: 'uk-modal-header',
};

export default ModalHeader;
