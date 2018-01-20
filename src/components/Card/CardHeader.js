import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

const CardFooter = ({ className, ...rest }) => (
  <BlockElement
    {...rest}
    as="div"
    className={classnames(className, CardFooter.meta.ukClass)}
  />
);

CardFooter.propTypes = {
  ...BlockElement.propTypes,
  className: PropTypes.string,
};

CardFooter.meta = {
  name: 'CardFooter',
  ukClass: 'uk-card-footer',
};

export default CardFooter;
