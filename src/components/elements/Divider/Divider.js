import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class Divider extends React.Component {
  static displayName = 'Divider';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('hr'),
    icon: PropTypes.bool,
    small: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'hr',
    icon: false,
    small: false,
  };

  render() {
    const { className, icon, small, ...rest } = this.props;

    const classes = classnames(className, {
      'uk-divider-icon': icon,
      'uk-divider-small': small,
    });

    return <Base {...rest} className={classes} component={Divider} />;
  }
}
