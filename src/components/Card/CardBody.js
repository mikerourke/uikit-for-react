import React from 'react';
import classnames from 'classnames';
import { BlockElement } from '../Base';

const CardBody = ({ className, ...rest }) => (
  <BlockElement
    {...rest}
    className={classnames(className, CardBody.meta.ukClass)}
  />
);

CardBody.propTypes = BlockElement.propTypes;

CardBody.meta = {
  name: 'CardBody',
  ukClass: 'uk-card-body',
};

export default CardBody;
