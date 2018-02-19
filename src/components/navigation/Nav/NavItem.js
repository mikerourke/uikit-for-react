import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, hasChildType } from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';
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
    inverse: Inverse.propTypes,
    href: PropTypes.string,
    margin: Margin.propTypes,
    text: Text.propTypes,
    utility: Utility.propTypes,
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
      inverse,
      href,
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
