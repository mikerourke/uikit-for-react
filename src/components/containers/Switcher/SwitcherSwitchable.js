import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, generateSelector, HTML } from '../../../lib';
import Base from '../../base';
import SwitcherContent from './SwitcherContent';
import SwitcherToggles from './SwitcherToggles';

export default class SwitcherSwitchable extends React.Component {
  static displayName = 'SwitcherSwitchable';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
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
    const { children, ...rest } = this.props;
    return (
      <Base {...rest} component={SwitcherSwitchable}>
        {this.renderChildren(children)}
      </Base>
    );
  }
}
