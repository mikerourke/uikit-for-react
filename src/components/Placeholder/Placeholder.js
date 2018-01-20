import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

const Placeholder = ({ className, ...rest }) => (
  <BlockElement
    {...rest}
    as="div"
    className={classnames(className, Placeholder.meta.ukClass)}
  />
);

Placeholder.propTypes = {
  ...BlockElement.propTypes,
  className: PropTypes.string,
};

Placeholder.meta = {
  name: 'Placeholder',
  ukClass: 'uk-placeholder',
};

export default Placeholder;
