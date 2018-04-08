/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class NavbarToggle extends React.Component {
  static displayName = 'NavbarToggle';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('a'),
    icon: PropTypes.node,
    title: PropTypes.node,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'a',
  };

  render() {
    const { className, icon, title, ...rest } = this.props;

    const hasIcon = !isNil(icon);
    const hasTitle = !isNil(title);

    const iconProp = { 'uk-navbar-toggle-icon': '' };
    const classes = classnames(className, 'uk-navbar-toggle');

    if (hasTitle) {
      return (
        <Base
          {...rest}
          className={classes}
          component={NavbarToggle}
          {...iconProp}
        />
      );
    }

    return (
      <Base {...rest} className={classes} component={NavbarToggle}>
        {hasIcon && React.cloneElement(icon, iconProp)}
        {hasTitle && title}
      </Base>
    );
  }
}
