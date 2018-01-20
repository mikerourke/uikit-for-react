import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';
import { HTML } from '../../lib';

const CardTitle = ({ className, ...rest }) => (
  <BlockElement
    {...rest}
    className={classnames(className, CardTitle.meta.ukClass)}
  />
);

CardTitle.propTypes = {
  ...BlockElement.propTypes,
  as: PropTypes.oneOf(HTML.HEADING_ELEMENTS),
};

CardTitle.meta = {
  name: 'CardTitle',
  ukClass: 'uk-card-title',
};

export default CardTitle;
