import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  UIK,
} from '../../lib';

class GridCell extends React.Component {
  static meta = {
    name: 'GridCell',
  };

  static propTypes = {
    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Specify how much space a flex item should take up. */
    grow: PropTypes.oneOf(['auto', 'full', 'none']),

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Match the height of the direct child of just one cell. */
    matchHeight: PropTypes.bool,

    /** Display the cell as the first or last element in the grid. */
    order: commonPropTypes.order,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,

    /** Apply a width based on the size of the parent container. */
    width: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.BASE_WIDTHS),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.BASE_WIDTHS)),
    ]),
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const {
      children,
      className,
      grow,
      margin,
      matchHeight,
      order,
      padding,
      width,
      ...rest
    } = this.props;

    const flexGrow = (isNil(grow)) ? null : grow.replace('full', '1');

    const classes = classnames(
      className,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('flex', order),
      buildObjectOrValueClassNames('padding', padding),
      buildObjectOrValueClassNames('width', width),
      {
        [buildClassName('flex', flexGrow)]: (!isNil(grow)),
        [buildClassName('grid', 'item', 'match')]: (matchHeight),
      },
    );

    return (
      <div
        {...rest}
        className={classes || undefined}
      >
        {children}
      </div>
    );
  }
}

export default GridCell;
