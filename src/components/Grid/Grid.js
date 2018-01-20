import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, isNil, without } from 'lodash';
import {
  buildClassName,
  getElementType,
  getOptionsString,
  restrictToChildTypes,
  UIK,
} from '../../lib';
import { BlockElement } from '../Base';
import GridCell from './GridCell';

export default class Grid extends BlockElement {
  static meta = {
    name: 'Grid',
    ukClass: 'uk-grid',
  };

  static displayName = 'Grid';

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOfType([
      PropTypes.oneOf(['div']),
      PropTypes.element,
      PropTypes.func,
    ]),
    children: restrictToChildTypes(GridCell),
    className: PropTypes.string,
    divider: PropTypes.bool,
    firstColumn: PropTypes.string,
    grow: PropTypes.oneOf(['auto', 'full', 'none']),
    gutter: PropTypes.oneOf([...without(UIK.SIZES, 'xlarge'), 'collapse']),
    matchHeight: PropTypes.bool,
    nextRow: PropTypes.shape({
      spacing: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
      location: PropTypes.oneOf(UIK.LOCATIONS),
    }),
  };

  static defaultProps = {
    as: 'div',
    divider: false,
    matchHeight: false,
  };

  static Cell = GridCell;

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      children,
      className,
      direction,
      divider,
      firstColumn,
      gutter,
      grow,
      matchHeight,
      nextRow,
      ...rest
    } = unhandledProps;

    const isReverse = get(direction, 'reverse', false);
    const flexGrow = isNil(grow) ? null : grow.replace('full', '1');

    const classes = classnames(
      className,
      inheritedClasses,
      buildClassName('flex', get(direction, 'as'), isReverse ? 'reverse' : ''),
      buildClassName(Grid.meta.ukClass, gutter),
      {
        [buildClassName(Grid.meta.ukClass, 'divider')]: divider,
        [buildClassName(Grid.meta.ukClass, 'match')]: matchHeight,
        [buildClassName('flex', flexGrow)]: !isNil(grow),
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
        className={classes || undefined}
        style={inheritedStyle}
        data-uk-grid={componentOptions}
        {...inheritedAttributes}
      >
        {children}
      </Element>
    );
  }
}
