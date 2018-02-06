import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  hasChildType,
} from '../../../lib';
import NavItemGroup from './NavItemGroup';
import NavSubNav from './NavSubNav';

export default class NavItem extends React.Component {
  static displayName = 'NavItem';

  static propTypes = {
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
  };

  static defaultProps = {
    active: false,
    as: 'li',
    className: '',
    href: '#',
  };

  render() {
    const {
      active,
      as,
      children,
      className,
      disabled,
      href,
      ...rest
    } = this.props;

    const classes = classnames(className, {
      [buildClassName('active')]: active,
      [buildClassName('disabled')]: disabled,
      [buildClassName('parent')]: hasChildType(children, NavSubNav),
    });

    const Element = getElementType(NavItem, this.props);
    return (
      <Element {...rest} className={classes}>
        {hasChildType(children, NavItemGroup) ? (
          children
        ) : (
          <a href={href}>{children}</a>
        )}
      </Element>
    );
  }
}
