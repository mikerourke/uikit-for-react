import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, isNil } from 'lodash';
import {
  buildClassName,
  customPropTypes,
  getOptionsString,
  HTML,
  UIK,
} from '../../../lib';
import { BlockElement } from '../../base';
import GridCell from './GridCell';

export default class Grid extends React.Component {
  static displayName = 'Grid';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    divider: PropTypes.bool,
    firstColumn: PropTypes.string,
    grow: PropTypes.oneOf(['auto', 'full', 'none']),
    gutter: PropTypes.oneOf([...UIK.BASE_SIZES, 'collapse']),
    matchHeight: PropTypes.bool,
    nextRow: PropTypes.shape({
      spacing: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
      location: PropTypes.oneOf(UIK.LOCATIONS),
    }),
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: '',
    divider: false,
    matchHeight: false,
  };

  static Cell = GridCell;

  constructor() {
    super();
    this.ref = null;
  }

  handleRef = element => {
    if (!element) return;
    this.ref = isNil(element.ref) ? element : element.ref;
  };

  render() {
    const {
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
        className={classes}
        ref={this.handleRef}
        data-uk-grid={componentOptions}
      />
    );
  }
}
