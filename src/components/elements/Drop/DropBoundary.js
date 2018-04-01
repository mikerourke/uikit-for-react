import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, generateSelector, HTML } from '../../../lib';
import Base from '../../base';

export default class DropBoundary extends React.Component {
  static displayName = 'DropBoundary';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    children: PropTypes.node.isRequired,
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
      if (child.type.displayName !== 'Drop') return child;
      return React.cloneElement(child, {
        boundary: `.${this.selector}`,
      });
    });

  render() {
    const { children, className, ...rest } = this.props;

    const classes = classnames(className, this.selector);

    return (
      <Base {...rest} className={classes} component={DropBoundary}>
        {this.renderChildren(children)}
      </Base>
    );
  }
}
