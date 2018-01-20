import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InlineElement } from '../Base';

const Totop = props => <a {...props} data-uk-totop />;

Totop.meta = {
  name: 'Totop',
};

export default Totop;
