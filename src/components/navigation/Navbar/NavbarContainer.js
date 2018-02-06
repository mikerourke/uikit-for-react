import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class NavbarContainer extends React.Component {
  static displayName = 'NavbarContainer';

  static propTypes = {
    as: customPropTypes.customOrStringElement('nav'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'nav',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-navbar-container');
    const Element = getElementType(NavbarContainer, this.props);
    return <Element {...rest} className={classes} />;
  }
}
