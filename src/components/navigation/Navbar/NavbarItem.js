import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, hasChildType } from '../../../lib';
import Base from '../../base';
import NavbarDropdown from './NavbarDropdown';

export default class NavbarItem extends React.Component {
  static displayName = 'NavbarItem';

  static propTypes = {
    ...Base.propTypes,
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node,
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

    const classes = classnames(className, {
      'uk-active': active,
    });

    const hasDropdown = hasChildType(children, NavbarDropdown);
    const hasSubtitle = hasChildType(children, NavbarDropdown);
    return (
      <Base {...rest} className={classes} component={NavbarItem}>
        {hasDropdown ? (
          children
        ) : (
          <a href={href}>{hasSubtitle ? <div>{children}</div> : children}</a>
        )}
      </Base>
    );
  }
}
