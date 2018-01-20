import React from 'react';
import classnames from 'classnames';
import { BlockElement } from '../Base';

const ModalTitle = ({ className, ...rest }) => (
  <BlockElement
    {...rest}
    className={classnames(className, ModalTitle.meta.ukClass)}
  />
);

ModalTitle.propTypes = BlockElement.propTypes;

ModalTitle.meta = {
  name: 'ModalTitle',
  ukClass: 'uk-modal-title',
};

export default ModalTitle;
