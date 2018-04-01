import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  customPropTypes,
  hasChildType,
  renderNavItemChildren,
} from '../../../lib';
import Base from '../../base';
import NavbarDropdown from './NavbarDropdown';
import NavbarSubtitle from './NavbarSubtitle';

export default class NavbarItem extends React.Component {
  static displayName = 'NavbarItem';

  static propTypes = {
    ...Base.propTypes,
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    href: PropTypes.string,
  };

  static defaultProps = {
    ...Base.defaultProps,
    active: false,
    as: 'li',
    href: '#',
  };

  render() {
    const { active, children, className, href, ...rest } = this.props;

    const classes = classnames(className, { 'uk-active': active });

    const hasDropdown = hasChildType(children, NavbarDropdown);
    const hasSubtitle = hasChildType(children, NavbarSubtitle);

    return (
      <Base {...rest} className={classes} component={NavbarItem}>
        {hasDropdown
          ? children
          : renderNavItemChildren(
              hasSubtitle ? <div>{children}</div> : children,
              { href },
            )}
      </Base>
    );
  }
}
