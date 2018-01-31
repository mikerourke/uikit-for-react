import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, isNil } from 'lodash';
import { buildClassName, UIK } from '../../../lib';
import { BlockElement } from '../../base';

export default class GridCell extends React.Component {
  static displayName = 'GridCell';

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOfType([
      PropTypes.oneOf(['div']),
      PropTypes.element,
      PropTypes.func,
    ]),
    children: PropTypes.node,
    className: PropTypes.string,
    grow: PropTypes.oneOf(['auto', 'full', 'none']),
    matchHeight: PropTypes.bool,
    order: PropTypes.oneOfType([
      PropTypes.oneOf(['first', 'last']),
      PropTypes.shape({
        first: PropTypes.oneOf(UIK.BREAKPOINTS),
        last: PropTypes.oneOf(UIK.BREAKPOINTS),
      }),
    ]),
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: '',
    matchHeight: false,
  };

  render() {
    const { className, grow, matchHeight, order, ...rest } = this.props;

    const flexGrow = isNil(grow) ? null : grow.replace('full', '1');

    const classes = classnames(
      className,
      buildClassName('flex', order),
      buildClassName('flex', 'first', get(order, 'first')),
      buildClassName('flex', 'last', get(order, 'last')),
      {
        [buildClassName('flex', flexGrow)]: grow,
        [buildClassName('grid', 'item', 'match')]: matchHeight,
      },
    );

    return <BlockElement {...rest} className={classes} />;
  }
}
