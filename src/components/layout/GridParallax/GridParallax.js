import React from 'react';
import PropTypes from 'prop-types';
import { getOptionsString } from '../../../lib';
import Grid, { GridCell } from '../Grid';

export default class GridParallax extends React.Component {
  static displayName = 'GridParallax';

  static propTypes = {
    ...Grid.propTypes,
    target: PropTypes.string,
    translate: PropTypes.number,
  };

  static defaultProps = {
    ...Grid.defaultProps,
    translate: 150,
  };

  static Cell = GridCell;

  render() {
    const { target, translate, ...rest } = this.props;
    return (
      <Grid
        {...rest}
        uk-grid={undefined}
        uk-grid-parallax={getOptionsString({ target, translate })}
      />
    );
  }
}
