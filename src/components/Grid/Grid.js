import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, isNil, without } from 'lodash';
import { buildClassName, getOptionsString, UIK } from '../../lib';
import { BlockElement } from '../Base';
import GridCell from './GridCell';

export default class Grid extends React.Component {
  static displayName = 'Grid';

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOfType([
      PropTypes.oneOf(['div']),
      PropTypes.element,
      PropTypes.func,
    ]),
    children: PropTypes.node.isRequired,
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
    ...BlockElement.defaultProps,
    as: 'div',
    className: null,
    divider: false,
    firstColumn: null,
    grow: null,
    matchHeight: false,
    nextRow: null,
  };

  static Cell = GridCell;

  render() {
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
    } = this.props;

    const isReverse = get(direction, 'reverse', false);
    const flexGrow = isNil(grow) ? null : grow.replace('full', '1');

    const ukClass = 'uk-grid';
    const classes = classnames(
      className,
      buildClassName('flex', get(direction, 'as'), isReverse ? 'reverse' : ''),
      buildClassName(ukClass, gutter),
      {
        [buildClassName(ukClass, 'divider')]: divider,
        [buildClassName(ukClass, 'match')]: matchHeight,
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

    return (
      <BlockElement
        {...rest}
        className={classes || undefined}
        data-uk-grid={componentOptions}
      >
        {children}
      </BlockElement>
    );
  }
}
