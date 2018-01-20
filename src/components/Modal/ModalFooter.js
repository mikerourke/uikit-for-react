import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

const ModalFooter = ({ className, ...rest }) => (
  <BlockElement
    {...rest}
    as="div"
    className={classnames(className, ModalFooter.meta.ukClass)}
  />
);

ModalFooter.propTypes = {
  ...BlockElement.propTypes,
  className: PropTypes.string,
};

ModalFooter.meta = {
  name: 'ModalFooter',
  ukClass: 'uk-modal-footer',
};

export default ModalFooter;
