import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, hasChildType } from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';
import NavbarDropdown from './NavbarDropdown';

export default class NavbarItem extends React.Component {
  static displayName = 'NavbarItem';

  static propTypes = {
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node,
    className: PropTypes.string,
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
      },
    );

    const hasDropdown = hasChildType(children, NavbarDropdown);
    const hasSubtitle = hasChildType(children, NavbarDropdown);
    const Element = getElementType(NavbarItem, as);
    return (
      <Element {...rest} className={classes}>
        {hasDropdown ? (
          children
        ) : (
          <a href={href}>{hasSubtitle ? <div>{children}</div> : children}</a>
        )}
      </Element>
    );
  }
}
