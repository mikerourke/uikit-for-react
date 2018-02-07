import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, hasChildType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';
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
    flex: Flex.propTypes,
    href: PropTypes.string,
    margin: Margin.propTypes,
    width: Width.propTypes,
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
      flex,
      href,
      margin,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-active': active,
        'uk-disabled': disabled,
        'uk-parent': hasChildType(children, NavSubNav),
      },
    );

    const Element = getElementType(NavItem, as);
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
