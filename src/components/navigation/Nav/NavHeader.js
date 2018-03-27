import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class NavHeader extends React.Component {
  static displayName = 'NavHeader';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('li'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'li',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-nav-header');
    return <Base {...rest} className={classes} component={NavHeader} />;
  }
}
