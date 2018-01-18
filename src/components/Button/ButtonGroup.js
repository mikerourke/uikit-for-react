import React from 'react';
import classnames from 'classnames';
import { Block } from '../Base';

const ButtonGroup = ({ className, ...rest }) => (
  <Block
    {...rest}
    as="div"
    className={classnames(className, ButtonGroup.meta.ukClass)}
  />
);

ButtonGroup.propTypes = Block.propTypes;

ButtonGroup.meta = {
  name: 'ButtonGroup',
  ukClass: 'uk-button-group',
};

export default ButtonGroup;
