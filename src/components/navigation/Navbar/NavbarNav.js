import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class NavbarNav extends React.Component {
  static displayName = 'NavbarNav';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'ul',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-navbar-nav');
    const Element = getElementType(NavbarNav, as);
    return <Element {...rest} className={classes} />;
  }
}
