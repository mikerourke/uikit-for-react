import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import {
  buildBreakpointClasses,
  buildClassName,
  customPropTypes,
  getOptionsString,
  HTML,
  LibraryComponent,
  UIK,
} from '../../lib';
import { flexProps } from '../common';
import Base from '../Base';
import GridCell from './GridCell';

export default class Grid extends React.Component {
  static displayName = 'Grid';

  static propTypes = {
    ...omit(Base.propTypes, 'flex'),
    ...flexProps.propTypes,
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
    ...Base.defaultProps,
    as: 'div',
  };

  static Cell = GridCell;

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('grid');
  }

  render() {
    const {
      alignItems,
      childWidth,
      className,
      direction,
      displayAs,
      divider,
      firstColumn,
      grow,
      gutter,
      inline,
      justifyContent,
      matchHeight,
      nextRow,
      order,
      textAlign,
      wrap,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildBreakpointClasses('childWidth', childWidth),
      buildBreakpointClasses('text', textAlign),
      buildClassName('grid', gutter),
      flexProps.extrapolateClasses({
        alignItems,
        direction,
        displayAs,
        grow,
        inline,
        justifyContent,
        order,
        wrap,
      }),
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
        {...this.libComp.appendProps(this.props)}
      />
    );
  }
}
