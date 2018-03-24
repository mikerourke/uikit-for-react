/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

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

    const iconProp = { 'data-uk-navbar-toggle-icon': '' };
    const classes = classnames(className, 'uk-navbar-toggle');

    if (!isNil(title)) {
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
        {icon && React.cloneElement(icon, iconProp)}
        {title && title}
      </Base>
    );
  }
}
