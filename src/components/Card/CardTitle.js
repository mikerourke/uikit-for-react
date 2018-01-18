import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Block } from '../Base';
import { HTML } from '../../lib';

const CardTitle = ({ className, ...rest }) => (
  <Block
    {...rest}
    className={classnames(className, CardTitle.meta.ukClass)}
  />
);

CardTitle.propTypes = {
  ...Block.propTypes,
  as: PropTypes.oneOf(HTML.HEADING_ELEMENTS),
};

CardTitle.meta = {
  name: 'CardTitle',
  ukClass: 'uk-card-title',
};

export default CardTitle;
