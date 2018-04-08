import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class NavbarSubtitle extends React.Component {
  static displayName = 'NavbarSubtitle';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-navbar-subtitle');

    return <Base {...rest} className={classes} component={NavbarSubtitle} />;
  }
}
