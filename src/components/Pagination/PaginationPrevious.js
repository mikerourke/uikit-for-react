import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InlineElement } from '../Base';

const PaginationPrevious = ({ className, ...rest }) => (
  <InlineElement
    {...rest}
    as="span"
    className={classnames(className, PaginationPrevious.meta.ukClass)}
    data-uk-pagination-previous
  />
);

PaginationPrevious.propTypes = {
  ...InlineElement.propTypes,
  className: PropTypes.string,
};

PaginationPrevious.meta = {
  name: 'PaginationPrevious',
};

export default PaginationPrevious;
