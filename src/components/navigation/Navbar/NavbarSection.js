import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  appendClassNamesToChildren,
  buildClassName,
  customPropTypes,
  UIK,
} from '../../../lib';
import Base from '../../base';

export default class NavbarSection extends React.Component {
  static displayName = 'NavbarSection';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
    location: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  componentDidMount() {
    const navs = document.querySelectorAll('[data-uikfr-nav]');
    if (navs.length !== 0) {
      navs.forEach(navElement => {
        const navClassList = navElement.classList;
        if (!navClassList.contains('uk-navbar-nav')) {
          navClassList.add('uk-navbar-nav');
        }
      });
    }
  }

  renderChildren = children =>
    appendClassNamesToChildren(children, {
      Dropdown: 'uk-navbar-dropdown',
      Nav: 'uk-navbar-nav',
    });

  render() {
    const { children, className, location, ...rest } = this.props;

    const classes = classnames(className, buildClassName('navbar', location));

    return (
      <Base {...rest} className={classes} component={NavbarSection}>
        {this.renderChildren(children)}
      </Base>
    );
  }
}
