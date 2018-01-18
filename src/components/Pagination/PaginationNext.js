import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { Inline } from '../Base';

const PaginationNext = ({ className, ...rest }) => (
  <Inline
    {...rest}
    as="span"
    className={classnames(className, PaginationNext.meta.ukClass)}
    data-uk-pagination-previous
  />
);

PaginationNext.propTypes = {
  ...omit(Inline.propTypes, 'as'),
  className: PropTypes.string,
};

PaginationNext.meta = {
  name: 'PaginationNext',
};

export default PaginationNext;
