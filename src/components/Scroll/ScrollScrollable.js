import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, HTML } from '../../lib';
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

  activateScrollPoints = children =>
    React.Children.map(children, child => {
      if (!React.isValidElement(child)) return child;
      if (child.type === ScrollPoint) {
        const currentIndex = this.pointIndex;
        this.pointIndex += 1;
        return React.cloneElement(child, {
          pointIndex: currentIndex,
          children: this.activateScrollPoints(child.props.children),
        });
      }
      return child;
    });

  renderChildren = children => {
    this.pointIndex = 0;
    return this.activateScrollPoints(children);
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
