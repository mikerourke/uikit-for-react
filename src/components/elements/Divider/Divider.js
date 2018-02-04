import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';

export default class Divider extends React.Component {
  static displayName = 'Divider';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringElement('hr'),
    className: PropTypes.string,
    icon: PropTypes.bool,
    small: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'hr',
    className: '',
    icon: false,
    small: false,
  };

  render() {
    const { className, icon, small, ...rest } = this.props;

    const ukClass = 'uk-divider';
    const classes = classnames(className, {
      [buildClassName(ukClass, 'icon')]: icon,
      [buildClassName(ukClass, 'small')]: small,
    });

    return <BlockElement {...rest} className={classes} />;
  }
}
