import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, isNil, without } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  getOptionsString,
  UIK,
} from '../../lib';
import GridCell from './GridCell';

class Grid extends React.Component {
  static meta = {
    name: 'Grid',
    ukClass: 'uk-grid',
  };

  static displayName = 'Grid';

  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.oneOf(['div']),
    ]),
    alignItems: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),
    children: PropTypes.node.isRequired,
    childWidth: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.CHILD_WIDTHS),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.CHILD_WIDTHS)),
    ]),
    className: PropTypes.string,
    direction: PropTypes.shape({
      as: PropTypes.oneOf(['column', 'row']),
      reverse: PropTypes.bool,
    }),
    divider: PropTypes.bool,
    firstColumn: PropTypes.string,
    grow: PropTypes.oneOf(['auto', 'full', 'none']),
    gutter: PropTypes.oneOf([...without(UIK.SIZES, 'xlarge'), 'collapse']),
    justifyContent: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.FLEX_HORIZONTAL_MODIFIERS)),
    ]),
    margin: commonPropTypes.margin,
    matchHeight: PropTypes.bool,
    nextRow: PropTypes.shape({
      spacing: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
      location: PropTypes.oneOf(UIK.LOCATIONS),
    }),
    order: commonPropTypes.order,
    padding: commonPropTypes.padding,
    parallax: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        target: PropTypes.string,
        translate: PropTypes.number,
      }),
    ]),
    textAlign: PropTypes.oneOfType([
      PropTypes.oneOf([...UIK.HORIZONTAL_POSITIONS, 'justify']),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS)),
    ]),
    width: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.BASE_WIDTHS),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.BASE_WIDTHS)),
    ]),
    wrap: PropTypes.shape({
      type: PropTypes.oneOf(['nowrap', 'reverse', 'wrap']),
      alignment: PropTypes.oneOf(UIK.FLEX_VERTICAL_MODIFIERS),
    }),
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  static Cell = GridCell;

  render() {
    const {
      alignItems,
      as,
      children,
      childWidth,
      className,
      direction,
      divider,
      firstColumn,
      gutter,
      grow,
      justifyContent,
      margin,
      matchHeight,
      nextRow,
      order,
      padding,
      parallax,
      textAlign,
      width,
      wrap,
      ...rest
    } = this.props;

    const isReverse = get(direction, 'reverse', false);
    const flexGrow = (isNil(grow)) ? null : grow.replace('full', '1');

    const classes = classnames(
      className,
      buildClassName('flex', alignItems),
      buildObjectOrValueClassNames('child', 'width', childWidth),
      buildClassName('flex', get(direction, 'as'), (isReverse ? 'reverse' : '')),
      buildObjectOrValueClassNames('flex', justifyContent),
      buildObjectOrValueClassNames('flex', order),
      buildClassName('flex', get(wrap, 'type')),
      buildClassName('flex', get(wrap, 'alignment')),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      buildObjectOrValueClassNames('text', textAlign),
      buildObjectOrValueClassNames('width', width),
      {
        [buildClassName(Grid.meta.ukClass, 'divider')]: (divider),
        [buildClassName(Grid.meta.ukClass, gutter)]: (!isNil(gutter)),
        [buildClassName(Grid.meta.ukClass, 'match')]: (matchHeight),
        [buildClassName('flex', flexGrow)]: (!isNil(grow)),
      },
    );

    const gridAttributeOptions = getOptionsString({
      firstColumn: (isNil(firstColumn)) ? 'uk-first-column' : firstColumn,
      margin: (isNil(nextRow))
        ? 'uk-grid-margin'
        : buildClassName('margin', get(nextRow, 'spacing', null), get(nextRow, 'location', null)),
    });

    const parallaxAttributeOptions = getOptionsString({
      target: get(parallax, 'target', false),
      translate: get(parallax, 'translate', 150),
    });

    const Element = getElementType(Grid, as, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        data-uk-grid={(isNil(parallax)) ? gridAttributeOptions : undefined}
        data-uk-grid-parallax={(!isNil(parallax)) ? parallaxAttributeOptions : undefined}
      >
        {children}
      </Element>
    );
  }
}

export default Grid;
