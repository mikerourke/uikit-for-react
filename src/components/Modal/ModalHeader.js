import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { Block } from '../Base';

const ModalHeader = ({ className, ...rest }) => (
  <Block
    {...rest}
    as="div"
    className={classnames(className, ModalHeader.meta.ukClass)}
  />
);

ModalHeader.propTypes = {
  ...omit(Block.propTypes, 'as'),
  className: PropTypes.string,
};

ModalHeader.meta = {
  name: 'ModalHeader',
  ukClass: 'uk-modal-header',
};

export default ModalHeader;
