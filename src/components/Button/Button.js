import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import invoke from 'lodash/invoke';
import isBoolean from 'lodash/isBoolean';
import isNil from 'lodash/isNil';
import { buildClassName, customPropTypes, UIK } from '../../lib';
import Base from '../Base';
import ButtonGroup from './ButtonGroup';

export default class Button extends React.Component {
  static displayName = 'Button';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('a', 'button'),
    close: PropTypes.bool,
    danger: PropTypes.bool,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.oneOf(UIK.ICON_NAMES),
    link: PropTypes.bool,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'small']),
    text: PropTypes.oneOfType([PropTypes.bool, Base.propTypes.text]),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'button',
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
    if (!isNil(this.props.onClick)) {
      invoke(this.props, 'onClick', e, this.props);
    }
  };

  render() {
    const {
      as,
      children,
      className,
      danger,
      disabled,
      fullWidth,
      href,
      icon,
      link,
      primary,
      secondary,
      size,
      text,
      ...rest
    } = this.props;

    const hasDefault =
      UIK.BUTTON_STYLES.reduce(
        (acc, styleName) => (this.props[styleName] ? acc + 1 : acc),
        0,
      ) === 0;
    const hasHref = !isNil(href);
    const hasIcon = !isNil(icon);
    const hasText = !isNil(text);

    const classes = classnames(className, buildClassName('button', size), {
      'uk-button': !hasIcon,
      'uk-button-danger': danger,
      'uk-button-default': !hasIcon && hasDefault,
      'uk-button-link': link,
      'uk-button-primary': primary,
      'uk-button-secondary': secondary,
      'uk-button-text': text === true,
      'uk-icon-button': hasIcon,
      'uk-width-1-1': fullWidth,
    });

    return (
      <Base
        {...rest}
        as={hasIcon || hasHref ? 'a' : as}
        className={classes}
        component={Button}
        disabled={(disabled && this.props.as === 'button') || undefined}
        href={href}
        onClick={this.handleClick}
        text={hasText && !isBoolean(text) ? text : undefined}
        uk-icon={hasIcon ? icon : undefined}
        uk-toggle={this.props.target ? '' : undefined}
      >
        {!hasIcon && children}
      </Base>
    );
  }
}
