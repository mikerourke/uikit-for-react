import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { Block } from '../Base';

const ModalFooter = ({ className, ...rest }) => (
  <Block
    {...rest}
    as="div"
    className={classnames(className, ModalFooter.meta.ukClass)}
  />
);

ModalFooter.propTypes = {
  ...omit(Block.propTypes, 'as'),
  className: PropTypes.string,
};

ModalFooter.meta = {
  name: 'ModalFooter',
  ukClass: 'uk-modal-footer',
};

export default ModalFooter;
