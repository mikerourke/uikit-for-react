import React from 'react';
import classnames from 'classnames';
import { Block } from '../Base';

const ModalTitle = ({ className, ...rest }) => (
  <Block
    {...rest}
    className={classnames(className, ModalTitle.meta.ukClass)}
  />
);

ModalTitle.propTypes = Block.propTypes;

ModalTitle.meta = {
  name: 'ModalTitle',
  ukClass: 'uk-modal-title',
};

export default ModalTitle;
