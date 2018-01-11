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
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    grow: PropTypes.oneOf(['auto', 'full', 'none']),
    margin: commonPropTypes.margin,
    matchHeight: PropTypes.bool,
    order: commonPropTypes.order,
    padding: commonPropTypes.padding,
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
