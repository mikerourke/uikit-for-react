import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

const ModalHeader = ({ className, ...rest }) => (
  <BlockElement
    {...rest}
    as="div"
    className={classnames(className, ModalHeader.meta.ukClass)}
  />
);

ModalHeader.propTypes = {
  ...BlockElement.propTypes,
  className: PropTypes.string,
};

ModalHeader.meta = {
  name: 'ModalHeader',
  ukClass: 'uk-modal-header',
};

export default ModalHeader;
