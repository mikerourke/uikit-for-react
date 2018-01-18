import React from 'react';
import { Block } from '../Base';

const Spinner = props => (
  <Block
    {...props}
    data-uk-spinner
  />
);

Spinner.propTypes = Block.propTypes;

Spinner.meta = {
  name: 'Spinner',
};

export default Spinner;
