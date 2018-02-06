import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, hasChildType } from '../../../lib';
import { BlockElement } from '../../base';
import NavItemGroup from './NavItemGroup';
import NavSubNav from './NavSubNav';

export default class NavItem extends React.Component {
  static displayName = 'NavItem';

  static propTypes = {
    ...BlockElement.propTypes,
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    active: false,
    as: 'li',
    className: '',
    href: '#',
  };

  render() {
    const { active, children, className, disabled, href, ...rest } = this.props;
    const classes = classnames(className, {
      [buildClassName('active')]: active,
      [buildClassName('disabled')]: disabled,
      [buildClassName('parent')]: hasChildType(children, NavSubNav),
    });
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
