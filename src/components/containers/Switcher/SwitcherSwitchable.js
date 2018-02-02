import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../../base';
import { generateSelector } from '../../../lib';
import SwitcherContent from './SwitcherContent';
import SwitcherToggles from './SwitcherToggles';

export default class SwitcherSwitchable extends React.Component {
  static displayName = 'SwitcherSwitchable';

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: '',
  };

  constructor() {
    super();
    this.selector = null;
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
    const { children, ...rest } = this.props;
    this.selector = generateSelector();
    return (
      <BlockElement {...rest}>{this.renderChildren(children)}</BlockElement>
    );
  }
}
