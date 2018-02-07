import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  customPropTypes,
  generateIdentifier,
  getElementType,
  HTML,
} from '../../../lib';
import { Flex, Inverse, Margin, Width } from '../../common';
import ScrollPoint from './ScrollPoint';

export default class ScrollScrollable extends React.Component {
  static displayName = 'ScrollScrollable';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    className: '',
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
    const {
      as,
      children,
      className,
      flex,
      inverse,
      margin,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(ScrollScrollable, as);
    return (
      <Element {...rest} className={classes || undefined}>
        {this.renderChildren(children)}
      </Element>
    );
  }
}
