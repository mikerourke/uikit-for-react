import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class NavbarSubtitle extends React.Component {
  static displayName = 'NavbarSubtitle';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-navbar-subtitle');
    const Element = getElementType(NavbarSubtitle, this.props);
    return <Element {...rest} className={classes} />;
  }
}
