import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { invoke, isNil, noop } from 'lodash';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  UIK,
} from '../../../lib';
import ButtonGroup from './ButtonGroup';

export default class Button extends React.Component {
  static displayName = 'Button';

  static propTypes = {
    as: customPropTypes.customOrStringElement('a', 'button'),
    children: PropTypes.node,
    className: PropTypes.string,
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
    text: PropTypes.bool,
  };

  static defaultProps = {
    as: 'button',
    className: '',
    danger: false,
    disabled: false,
    fullWidth: false,
    link: false,
    onClick: noop,
    primary: false,
    secondary: false,
    text: false,
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
      text,
      ...rest
    } = this.props;

    const hasDefault =
      UIK.BUTTON_STYLES.reduce(
        (acc, styleName) => (this.props[styleName] ? acc + 1 : acc),
        0,
      ) === 0;
    const hasIcon = !isNil(icon);

    const ukClass = 'uk-button';
    const classes = classnames(className, buildClassName('button', size), {
      [ukClass]: !hasIcon,
      [buildClassName(ukClass, 'danger')]: danger,
      [buildClassName(ukClass, 'default')]: !hasIcon && hasDefault,
      [buildClassName(ukClass, 'link')]: link,
      [buildClassName(ukClass, 'primary')]: primary,
      [buildClassName(ukClass, 'secondary')]: secondary,
      [buildClassName(ukClass, 'text')]: text,
      [buildClassName('icon', 'button')]: hasIcon,
      [buildClassName('width', '1', '1')]: fullWidth,
    });

    let Element = getElementType(Button, this.props);
    if (hasIcon) Element = 'a';
    return (
      <Element
        {...rest}
        className={classes}
        disabled={(disabled && this.props.as === 'button') || undefined}
        onClick={this.handleClick}
        data-uk-icon={hasIcon ? `icon: ${icon}` : undefined}
      >
        {!hasIcon && children}
      </Element>
    );
  }
}
