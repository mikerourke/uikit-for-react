import React from 'react';
import classnames from 'classnames';
import { Block } from '../Base';

const CardBody = ({ className, ...rest }) => (
  <Block
    {...rest}
    className={classnames(className, CardBody.meta.ukClass)}
  />
);

CardBody.propTypes = Block.propTypes;

CardBody.meta = {
  name: 'CardBody',
  ukClass: 'uk-card-body',
};

export default CardBody;
