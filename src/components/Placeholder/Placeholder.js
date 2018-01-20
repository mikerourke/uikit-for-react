import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { Block } from '../Base';

const Placeholder = ({ className, ...rest }) => (
  <Block
    {...rest}
    as="div"
    className={classnames(className, Placeholder.meta.ukClass)}
  />
);

Placeholder.propTypes = {
  ...omit(Block.propTypes, 'as'),
  className: PropTypes.string,
};

Placeholder.meta = {
  name: 'Placeholder',
  ukClass: 'uk-placeholder',
};

export default Placeholder;
