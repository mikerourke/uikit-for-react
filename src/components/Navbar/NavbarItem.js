import React from 'react';
import classnames from 'classnames';
import { childMatchesType, customPropTypes, recurseChildren } from '../../lib';
import Base from '../Base';

export default class NavbarItem extends React.Component {
  static displayName = 'NavbarItem';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  renderChildren = children =>
    recurseChildren(children, child => {
      if (childMatchesType(child, 'Search')) {
        return React.cloneElement(child, {
          className: classnames(child.props.className, 'uk-search-navbar'),
        });
      }
      return child;
    });

  render() {
    const { children, className, ...rest } = this.props;

    const classes = classnames(className, 'uk-navbar-item');

    return (
      <Base {...rest} className={classes} component={NavbarItem}>
        {this.renderChildren(children)}
      </Base>
    );
  }
}
