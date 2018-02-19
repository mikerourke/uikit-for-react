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
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';
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
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    matchHeight: PropTypes.bool,
    nextRow: PropTypes.shape({
      spacing: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
      location: PropTypes.oneOf(UIK.LOCATIONS),
    }),
    textAlign: customPropTypes.forBreakpoints(UIK.TEXT_ALIGNMENTS),
    text: Text.propTypes,
    utility: Utility.propTypes,
    width: Width.propTypes,
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
      inverse,
      margin,
      matchHeight,
      nextRow,
      textAlign,
      text,
      utility,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
      Width.getClasses(width),
      buildBreakpointClasses('childWidth', childWidth),
      buildBreakpointClasses('text', textAlign),
      buildClassName('grid', gutter),
      {
        'uk-grid-divider': divider,
        'uk-grid-match': matchHeight,
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

    const Element = getElementType(Grid, as);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        data-uk-grid={componentOptions}
      />
    );
  }
}
