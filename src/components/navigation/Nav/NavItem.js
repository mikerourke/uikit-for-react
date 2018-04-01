import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, hasChildType, renderNavItemChildren } from '../../../lib';
import Base from '../../base';
import NavItemGroup from './NavItemGroup';
import NavSubNav from './NavSubNav';

export default class NavItem extends React.Component {
  static displayName = 'NavItem';

  static propTypes = {
    ...Base.propTypes,
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    disabled: PropTypes.bool,
    href: PropTypes.string,
  };

  static defaultProps = {
    ...Base.defaultProps,
    active: false,
    as: 'li',
  };

  render() {
    const { active, children, className, disabled, href, ...rest } = this.props;

    const classes = classnames(className, {
      'uk-active': active,
      'uk-disabled': disabled,
      'uk-parent': hasChildType(children, NavSubNav),
    });

    return (
      <Base {...rest} className={classes} component={NavItem}>
        {hasChildType(children, NavItemGroup)
          ? children
          : renderNavItemChildren(children, { href })}
      </Base>
    );
  }
}
