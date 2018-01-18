import React from 'react';
import classnames from 'classnames';
import { Block } from '../Base';

const ModalFooter = ({ className, ...rest }) => (
  <Block
    {...rest}
    as="div"
    className={classnames(className, ModalFooter.meta.ukClass)}
  />
);

ModalFooter.propTypes = {
  ...Block.propTypes,
  as: undefined,
};

ModalFooter.meta = {
  name: 'ModalFooter',
  ukClass: 'uk-modal-footer',
};

export default ModalFooter;
