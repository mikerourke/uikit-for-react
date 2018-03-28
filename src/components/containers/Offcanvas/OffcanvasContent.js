import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, generateSelector } from '../../../lib';
import Base from '../../base';

export default class OffcanvasContent extends React.Component {
  static displayName = 'OffcanvasContent';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
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

  renderChildren = children =>
    React.Children.map(children, child => {
      if (child.type.displayName === 'Offcanvas') {
        return React.cloneElement(child, {
          className: classnames(child.props.className, this.selector),
        });
      }

      if (child.type.displayName === 'OffcanvasToggle') {
        return React.cloneElement(child, {
          target: `.${this.selector}`,
        });
      }
      return child;
    });

  render() {
    const { children, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-offcanvas-content');
    return (
      <Base {...rest} className={classes} component={OffcanvasContent}>
        {this.renderChildren(children)}
      </Base>
    );
  }
}
