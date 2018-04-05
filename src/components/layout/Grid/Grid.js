import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildBreakpointClasses,
  buildClassName,
  customPropTypes,
  getOptionsString,
  HTML,
  UIK,
} from '../../../lib';
import Base from '../../base';
import GridCell from './GridCell';

export default class Grid extends React.Component {
  static displayName = 'Grid';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    childWidth: customPropTypes.forBreakpoints(UIK.CHILD_WIDTHS),
    divider: PropTypes.bool,
    firstColumn: PropTypes.string,
    gutter: PropTypes.oneOf([...UIK.BASE_SIZES, 'collapse']),
    matchHeight: PropTypes.bool,
    nextRow: PropTypes.string,
    textAlign: customPropTypes.forBreakpoints(UIK.TEXT_ALIGNMENTS),
  };

  static defaultProps = {
    as: 'div',
    divider: false,
    matchHeight: false,
  };

  static Cell = GridCell;

  render() {
    const {
      childWidth,
      className,
      divider,
      firstColumn,
      gutter,
      matchHeight,
      nextRow,
      textAlign,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildBreakpointClasses('childWidth', childWidth),
      buildBreakpointClasses('text', textAlign),
      buildClassName('grid', gutter),
      {
        'uk-grid-divider': divider,
        'uk-grid-match': matchHeight,
      },
    );

    return (
      <Base
        {...rest}
        className={classes || undefined}
        component={Grid}
        uk-grid={getOptionsString({ firstColumn, margin: nextRow })}
      />
    );
  }
}
