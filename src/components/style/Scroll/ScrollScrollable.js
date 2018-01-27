import React from 'react';
import PropTypes from 'prop-types';
import { generateIdentifier, getElementType, HTML } from '../../../lib/index';
import ScrollPoint from './ScrollPoint';

export default class ScrollScrollable extends React.Component {
  static displayName = 'ScrollScrollable';

  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
      PropTypes.element,
      PropTypes.func,
    ]),
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

  renderChildren = () => {
    this.pointIndex = 0;
    return this.activateScrollPoints(this.props.children);
  };

  render() {
    const { as, ...rest } = this.props;
    const Element = getElementType(ScrollScrollable, this.props);
    return <Element {...rest}>{this.renderChildren()}</Element>;
  }
}
