import React from 'react';
import PropTypes from 'prop-types';
import {
  childMatchesType,
  customPropTypes,
  HTML,
  recurseChildren,
} from '../../lib';
import Base from '../Base';
import ScrollPoint from './ScrollPoint';

export default class ScrollScrollable extends React.Component {
  static displayName = 'ScrollScrollable';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  renderChildren = children => {
    let pointIndex = 0;
    return recurseChildren(children, child => {
      if (childMatchesType(child, ScrollPoint)) {
        pointIndex += 1;
        return React.cloneElement(child, {
          pointIndex: pointIndex - 1,
        });
      }
      return child;
    });
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base {...rest} component={ScrollScrollable}>
        {this.renderChildren(children)}
      </Base>
    );
  }
}
