import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { invoke, isNil } from 'lodash';
import { buildClassName, UIK } from '../../lib';
import { InlineElement } from '../Base';
import ButtonGroup from './ButtonGroup';

export default class Button extends InlineElement {
  static meta = {
    name: 'Button',
    ukClass: 'uk-button',
  };

  static propTypes = {
    ...InlineElement.propTypes,
    as: PropTypes.oneOf(['a', 'button']),
    children: PropTypes.node,
    className: PropTypes.string,
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
    danger: false,
    disabled: false,
    fullWidth: false,
    link: false,
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

    const classes = classnames(className, buildClassName('button', size), {
      [Button.meta.ukClass]: !hasIcon,
      [buildClassName(Button.meta.ukClass, 'danger')]: danger,
      [buildClassName(Button.meta.ukClass, 'default')]: !hasIcon && hasDefault,
      [buildClassName(Button.meta.ukClass, 'link')]: link,
      [buildClassName(Button.meta.ukClass, 'primary')]: primary,
      [buildClassName(Button.meta.ukClass, 'secondary')]: secondary,
      [buildClassName(Button.meta.ukClass, 'text')]: text,
      [buildClassName('icon', 'button')]: hasIcon,
      [buildClassName('width', '1', '1')]: fullWidth,
    });

    return (
      <InlineElement
        {...rest}
        as={hasIcon ? 'a' : as}
        className={classes || undefined}
        disabled={(disabled && this.props.as === 'button') || undefined}
        onClick={this.handleClick}
        role="button"
        data-uk-icon={hasIcon ? `icon: ${icon}` : undefined}
      >
        {!hasIcon && children}
      </InlineElement>
    );
  }
}
