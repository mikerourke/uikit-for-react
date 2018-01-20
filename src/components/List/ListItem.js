import React from 'react';
import { BlockElement } from '../Base';

const ListItem = props => <BlockElement {...props} as="li" />;

ListItem.propTypes = BlockElement.propTypes;

ListItem.meta = {
  name: 'ListItem',
};

export default ListItem;
