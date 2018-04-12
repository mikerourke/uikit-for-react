import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import {
  childMatchesType,
  customPropTypes,
  generateSelector,
  HTML,
} from '../../lib';
import Base from '../Base';
import ToggleTarget from './ToggleTarget';

export default class ToggleTogglable extends React.Component {
  static displayName = 'ToggleTogglable';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    children: ExtraPropTypes.and([
      PropTypes.node,
      props => {
        let targetCount = 0;
        let toggleCount = 0;
        React.Children.forEach(props.children, child => {
          if (child.type === ToggleTarget) targetCount += 1;
          if (child.type.name === 'Toggle') toggleCount += 1;
        });

        if (targetCount === 0 || toggleCount === 0) {
          return new Error(
            'You must include a Target and Toggle component in Togglable ' +
            'container.',
          );
        }

        if (targetCount > 1) {
          return new Error(
            'You cannot have more than one Target component inside of a ' +
            'Togglable container.',
          );
        }
        return null;
      },
    ]),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  constructor(props) {
    super(props);
    this.selector = generateSelector();
  }

  renderChildren = children =>
    React.Children.map(children, child => {
      if (child.type.name === 'Toggle') {
        return React.cloneElement(child, {
          target: `.${this.selector}`,
        });
      }
      if (child.type === ToggleTarget) {
        return React.cloneElement(child, {
          className: classnames(child.props.className, this.selector),
        });
      }
      return child;
    });

  render() {
    const { children, ...rest } = this.props;
    return (
      <Base {...rest} component={ToggleTogglable}>
        {this.renderChildren(children)}
      </Base>
    );
  }
}
