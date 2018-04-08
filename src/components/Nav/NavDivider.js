import React from 'react';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class NavDivider extends React.Component {
  static displayName = 'NavDivider';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('li'),
    children: ExtraPropTypes.restrictedProp(),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'li',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-nav-divider');

    return <Base {...rest} className={classes} component={NavDivider} />;
  }
}
