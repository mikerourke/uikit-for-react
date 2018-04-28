/* eslint-disable jsx-a11y/anchor-has-content */
// TODO: Review this, it doesn't line up with the example in Search.
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import { customPropTypes } from '../../lib';
import Base from '../Base';
import Toggle from '../Toggle';

export default class NavbarToggle extends React.Component {
  static displayName = 'NavbarToggle';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('a'),
    icon: PropTypes.node,
    search: PropTypes.bool,
    title: PropTypes.node,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'a',
  };

  render() {
    const { className, icon, search, title, ...rest } = this.props;

    const hasIcon = !isNil(icon);
    const hasTitle = !isNil(title);

    const classes = classnames(className, 'uk-navbar-toggle');

    if (!hasIcon && !hasTitle) {
      return (
        <Toggle
          {...rest}
          className={classes}
          component={NavbarToggle}
          uk-search-icon={search ? '' : undefined}
          uk-navbar-toggle-icon={search ? undefined : ''}
        />
      );
    }

    const iconProp = { 'uk-navbar-toggle-icon': '' };
    return (
      <Toggle
        {...rest}
        className={classes}
        component={NavbarToggle}
        uk-search-icon={search ? '' : undefined}
        uk-navbar-toggle-icon={search ? undefined : ''}
      >
        {hasIcon ? React.cloneElement(icon, iconProp) : <span {...iconProp} />}
        {hasTitle && title}
      </Toggle>
    );
  }
}
