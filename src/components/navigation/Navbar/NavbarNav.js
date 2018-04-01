import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class NavbarNav extends React.Component {
  static displayName = 'NavbarNav';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-navbar-nav');

    return <Base {...rest} className={classes} component={NavbarNav} />;
  }
}
