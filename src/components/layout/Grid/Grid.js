import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, isNil } from 'lodash';
import {
  buildBreakpointClasses,
  buildClassName,
  customPropTypes,
  getBaseRef,
  getElementType,
  getOptionsString,
  HTML,
  UIK,
} from '../../../lib';
import { Flex, Margin } from '../../common';
import GridCell from './GridCell';

export default class Grid extends React.Component {
  static displayName = 'Grid';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    childWidth: customPropTypes.forBreakpoints(UIK.CHILD_WIDTHS),
    className: PropTypes.string,
    divider: PropTypes.bool,
    firstColumn: PropTypes.string,
    flex: Flex.propTypes,
    gutter: PropTypes.oneOf([...UIK.BASE_SIZES, 'collapse']),
    margin: Margin.propTypes,
    matchHeight: PropTypes.bool,
    nextRow: PropTypes.shape({
      spacing: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
      location: PropTypes.oneOf(UIK.LOCATIONS),
    }),
    textAlign: customPropTypes.forBreakpoints(UIK.TEXT_ALIGNMENTS),
  };

  static defaultProps = {
    as: 'div',
    className: '',
    divider: false,
    matchHeight: false,
  };

  static Cell = GridCell;

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  render() {
    const {
      as,
      childWidth,
      className,
      divider,
      firstColumn,
      flex,
      gutter,
      margin,
      matchHeight,
      nextRow,
      textAlign,
      ...rest
    } = this.props;

    const ukClass = 'uk-grid';
    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      buildBreakpointClasses('childWidth', childWidth),
      buildBreakpointClasses('text', textAlign),
      buildClassName(ukClass, gutter),
      {
        [buildClassName(ukClass, 'divider')]: divider,
        [buildClassName(ukClass, 'match')]: matchHeight,
      },
    );

    const componentOptions = getOptionsString({
      firstColumn: isNil(firstColumn) ? 'uk-first-column' : firstColumn,
      margin: isNil(nextRow)
        ? 'uk-grid-margin'
        : buildClassName(
            'margin',
            get(nextRow, 'spacing', null),
            get(nextRow, 'location', null),
          ),
    });

    const Element = getElementType(Grid, this.props);
    return (
      <Element
        {...rest}
        className={classes}
        ref={this.handleRef}
        data-uk-grid={componentOptions}
      />
    );
  }
}
