import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InlineElement } from '../Base';

const PaginationNext = ({ className, ...rest }) => (
  <InlineElement
    {...rest}
    as="span"
    className={classnames(className, PaginationNext.meta.ukClass)}
    data-uk-pagination-previous
  />
);

PaginationNext.propTypes = {
  ...InlineElement.propTypes,
  className: PropTypes.string,
};

PaginationNext.meta = {
  name: 'PaginationNext',
};

export default PaginationNext;
