import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class NavbarContainer extends React.Component {
  static displayName = 'NavbarContainer';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('nav'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'nav',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-navbar-container');

    return <Base {...rest} className={classes} component={NavbarContainer} />;
  }
}
