import React from 'react';
import classnames from 'classnames';
import { BlockElement } from '../Base';

const ButtonGroup = ({ className, ...rest }) => (
  <BlockElement
    {...rest}
    as="div"
    className={classnames(className, ButtonGroup.meta.ukClass)}
  />
);

ButtonGroup.propTypes = BlockElement.propTypes;

ButtonGroup.meta = {
  name: 'ButtonGroup',
  ukClass: 'uk-button-group',
};

export default ButtonGroup;
