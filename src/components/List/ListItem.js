import React from 'react';
import { omit } from 'lodash';
import { Block } from '../Base';

const ListItem = props => (
  <Block {...props} as="li" />
);

ListItem.propTypes = omit(Block.propTypes, 'as');

ListItem.meta = {
  name: 'ListItem',
};

export default ListItem;
