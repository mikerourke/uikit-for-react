import React from 'react';
import PropTypes from 'prop-types';
import {
  customPropTypes,
  generateIdentifier,
  getElementType,
  HTML,
} from '../../../lib';
import ScrollPoint from './ScrollPoint';

export default class ScrollScrollable extends React.Component {
  static displayName = 'ScrollScrollable';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    as: 'div',
  };

  activateScrollPoints = children =>
    React.Children.map(children, child => {
      if (!React.isValidElement(child)) return child;
      if (child.type === ScrollPoint) {
        const currentIndex = this.pointIndex;
        this.pointIndex += 1;
        return React.cloneElement(child, {
          elementName: generateIdentifier(),
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
    const { as, children, ...rest } = this.props;
    const Element = getElementType(ScrollScrollable, as);
    return <Element {...rest}>{this.renderChildren(children)}</Element>;
  }
}
