import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  customPropTypes,
  generateSelector,
  getElementType,
  HTML,
} from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';
import SwitcherContent from './SwitcherContent';
import SwitcherToggles from './SwitcherToggles';

export default class SwitcherSwitchable extends React.Component {
  static displayName = 'SwitcherSwitchable';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    text: Text.propTypes,
    utility: Utility.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  constructor() {
    super();
    this.selector = generateSelector();
  }

  updateSwitchElements = children =>
    React.Children.map(children, child => {
      if (!React.isValidElement(child)) return child;
      if (child.type === SwitcherToggles) {
        return React.cloneElement(child, {
          selectorConnect: classnames(
            child.props.selectorConnect,
            this.selector,
          ),
          children: this.updateSwitchElements(child.props.children),
        });
      }
      if (child.type === SwitcherContent) {
        return React.cloneElement(child, {
          className: classnames(child.props.className, this.selector),
          children: this.updateSwitchElements(child.props.children),
        });
      }
      return child;
    });

  renderChildren = children => this.updateSwitchElements(children);

  render() {
    const {
      as,
      children,
      className,
      flex,
      inverse,
      margin,
      text,
      utility,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
      Width.getClasses(width),
    );

    const Element = getElementType(SwitcherSwitchable, as);
    return (
      <Element {...rest} className={classes || undefined}>
        {this.renderChildren(children)}
      </Element>
    );
  }
}
