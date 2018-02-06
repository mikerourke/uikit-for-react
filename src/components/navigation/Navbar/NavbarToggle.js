/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import { customPropTypes, getElementType } from '../../../lib';
import { InlineElement } from '../../base';

export default class NavbarToggle extends React.Component {
  static displayName = 'NavbarToggle';

  static propTypes = {
    as: customPropTypes.customOrStringElement('a'),
    className: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.node,
  };

  static defaultProps = {
    as: 'a',
    className: '',
  };

  render() {
    const { as, className, icon, title, ...rest } = this.props;

    const iconProp = { 'data-uk-navbar-toggle-icon': '' };
    const ukClass = 'uk-navbar-toggle';
    const classes = classnames(className, ukClass);
    if (!isNil(title)) {
      const LinkElement = getElementType(NavbarToggle, this.props);
      return <LinkElement {...rest} className={classes} {...iconProp} />;
    }

    const OuterElement = getElementType(NavbarToggle, this.props);
    return (
      <OuterElement {...rest} className={classes}>
        {icon && React.cloneElement(icon, iconProp)}
        {title && title}
      </OuterElement>
    );
  }
}
