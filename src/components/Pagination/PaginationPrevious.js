import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { Inline } from '../Base';

const PaginationPrevious = ({ className, ...rest }) => (
  <Inline
    {...rest}
    as="span"
    className={classnames(className, PaginationPrevious.meta.ukClass)}
    data-uk-pagination-previous
  />
);

PaginationPrevious.propTypes = {
  ...omit(Inline.propTypes, 'as'),
  className: PropTypes.string,
};

PaginationPrevious.meta = {
  name: 'PaginationPrevious',
};

export default PaginationPrevious;
