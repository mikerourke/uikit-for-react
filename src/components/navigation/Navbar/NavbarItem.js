import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  hasChildType,
} from '../../../lib';
import NavbarDropdown from './NavbarDropdown';

export default class NavbarItem extends React.Component {
  static displayName = 'NavbarItem';

  static propTypes = {
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
  };

  static defaultProps = {
    active: false,
    as: 'li',
    className: '',
    href: '#',
  };

  render() {
    const { active, as, children, className, href, ...rest } = this.props;

    const classes = classnames(className, {
      [buildClassName('active')]: active,
    });

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
