import React from 'react';
import { BlockElement } from '../Base';

const Spinner = props => <BlockElement {...props} data-uk-spinner />;

Spinner.propTypes = BlockElement.propTypes;

Spinner.meta = {
  name: 'Spinner',
};

export default Spinner;
