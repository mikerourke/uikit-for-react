import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import invoke from 'lodash/invoke';
import isNil from 'lodash/isNil';
import noop from 'lodash/noop';
import { buildClassName, customPropTypes, UIK } from '../../../lib';
import Base from '../../base';
import ButtonGroup from './ButtonGroup';

export default class Button extends React.Component {
  static displayName = 'Button';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('a', 'button'),
    asText: PropTypes.bool,
    children: PropTypes.node,
    close: PropTypes.bool,
    danger: PropTypes.bool,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    icon: PropTypes.oneOf(UIK.ICON_NAMES),
    link: PropTypes.bool,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'small']),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'button',
    asText: false,
    danger: false,
    fullWidth: false,
    link: false,
    primary: false,
    secondary: false,
  };

  static Group = ButtonGroup;

  handleClick = e => {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }
    invoke(this.props, 'onClick', e, this.props);
  };

  render() {
    const {
      as,
      asText,
      children,
      className,
      danger,
      disabled,
      fullWidth,
      icon,
      link,
      primary,
      secondary,
      size,
      ...rest
    } = this.props;

    const validStyles = UIK.BUTTON_STYLES.map(
      styleName => (styleName === 'text' ? 'asText' : styleName),
    );
    const hasDefault =
      validStyles.reduce(
        (acc, styleName) => (this.props[styleName] ? acc + 1 : acc),
        0,
      ) === 0;
    const hasIcon = !isNil(icon);

    const classes = classnames(className, buildClassName('button', size), {
      'uk-button': !hasIcon,
      'uk-button-danger': danger,
      'uk-button-default': !hasIcon && hasDefault,
      'uk-button-link': link,
      'uk-button-primary': primary,
      'uk-button-secondary': secondary,
      'uk-button-text': asText,
      'uk-icon-button': hasIcon,
      'uk-width-1-1': fullWidth,
    });

    return (
      <Base
        {...rest}
        as={hasIcon ? 'a' : as}
        className={classes}
        component={Button}
        disabled={(disabled && this.props.as === 'button') || undefined}
        onClick={this.handleClick}
        data-uk-icon={hasIcon ? `icon: ${icon}` : undefined}
      >
        {!hasIcon && children}
      </Base>
    );
  }
}
