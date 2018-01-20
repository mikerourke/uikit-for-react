import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { Block } from '../Base';

const CardFooter = ({ className, ...rest }) => (
  <Block
    {...rest}
    as="div"
    className={classnames(className, CardFooter.meta.ukClass)}
  />
);

CardFooter.propTypes = {
  ...omit(Block.propTypes, 'as'),
  className: PropTypes.string,
};

CardFooter.meta = {
  name: 'CardFooter',
  ukClass: 'uk-card-footer',
};

export default CardFooter;
