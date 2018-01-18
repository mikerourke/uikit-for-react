import React from 'react';
import classnames from 'classnames';
import { Block } from '../Base';

const CardFooter = ({ className, ...rest }) => (
  <Block
    {...rest}
    as="div"
    className={classnames(className, CardFooter.meta.ukClass)}
  />
);

CardFooter.propTypes = {
  ...Block.propTypes,
  as: undefined,
};

CardFooter.meta = {
  name: 'CardFooter',
  ukClass: 'uk-card-footer',
};

export default CardFooter;
