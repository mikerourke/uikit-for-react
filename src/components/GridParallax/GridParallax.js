import React from 'react';
import PropTypes from 'prop-types';
import { getOptionsString } from '../../lib';
import Grid, { GridCell } from '../Grid';

const GridParallax = ({ target, translate, ...rest }) => {
  const componentOptions = getOptionsString({
    target,
    translate,
  });

  return (
    <Grid
      {...rest}
      data-uk-grid={undefined}
      data-uk-grid-parallax={componentOptions}
    />
  );
};

GridParallax.propTypes = {
  ...Grid.propTypes,
  target: PropTypes.string,
  translate: PropTypes.number,
};

GridParallax.meta = {
  name: 'GridParallax',
};

GridParallax.Cell = GridCell;

export default GridParallax;
