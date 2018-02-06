import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';

export default class Divider extends React.Component {
  static displayName = 'Divider';

  static propTypes = {
    as: customPropTypes.customOrStringElement('hr'),
    className: PropTypes.string,
    icon: PropTypes.bool,
    small: PropTypes.bool,
  };

  static defaultProps = {
    as: 'hr',
    className: '',
    icon: false,
    small: false,
  };

  render() {
    const { as, className, icon, small, ...rest } = this.props;

    const ukClass = 'uk-divider';
    const classes = classnames(className, {
      [buildClassName(ukClass, 'icon')]: icon,
      [buildClassName(ukClass, 'small')]: small,
    });

    const Element = getElementType(Divider, this.props);
    return <Element {...rest} className={classes} />;
  }
}
