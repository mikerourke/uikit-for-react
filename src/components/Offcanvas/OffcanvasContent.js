import React from 'react';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { customPropTypes, generateSelector } from '../../lib';
import Base from '../Base';

export default class OffcanvasContent extends React.Component {
  static displayName = 'OffcanvasContent';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
    children: ExtraPropTypes.or([
      ExtraPropTypes.componentWithName('Offcanvas'),
      ExtraPropTypes.componentWithName('OffcanvasToggle'),
    ]).isRequired,
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
      if (child.type.name === 'Offcanvas') {
        return React.cloneElement(child, {
          className: classnames(child.props.className, this.selector),
        });
      }

      if (child.type.name === 'OffcanvasToggle') {
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
