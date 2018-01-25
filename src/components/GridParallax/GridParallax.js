import React from 'react';
import PropTypes from 'prop-types';
import { getOptionsString } from '../../lib';
import Grid, { GridCell } from '../Grid';

export default class GridParallax extends React.Component {
  static displayName = 'GridParallax';

  static propTypes = {
    ...Grid.propTypes,
    children: PropTypes.node.isRequired,
    target: PropTypes.string,
    translate: PropTypes.number,
  };

  static defaultProps = {
    ...Grid.defaultProps,
    target: null,
    translate: null,
  };

  static Cell = GridCell;

  render() {
    const { target, translate, ...rest } = this.props;

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
  }
}
