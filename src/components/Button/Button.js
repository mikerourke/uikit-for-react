import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { invoke, isNil } from 'lodash';
import { buildClassName, getIfDefaultStyle } from '../../lib';
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
    icon: PropTypes.string,
    link: PropTypes.bool,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'small']),
    text: PropTypes.bool,
  };

  static defaultProps = {
    as: 'button',
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
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
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
    } = unhandledProps;

    const hasDefault = getIfDefaultStyle(this.props);
    const hasIcon = !isNil(icon);

    const classes = classnames(
      className,
      inheritedClasses,
      buildClassName('button', size),
      {
        [Button.meta.ukClass]: !hasIcon,
        [buildClassName(Button.meta.ukClass, 'danger')]: danger,
        [buildClassName(Button.meta.ukClass, 'default')]:
          !hasIcon && hasDefault,
        [buildClassName(Button.meta.ukClass, 'link')]: link,
        [buildClassName(Button.meta.ukClass, 'primary')]: primary,
        [buildClassName(Button.meta.ukClass, 'secondary')]: secondary,
        [buildClassName(Button.meta.ukClass, 'text')]: text,
        [buildClassName('icon', 'button')]: hasIcon,
        [buildClassName('width', '1', '1')]: fullWidth,
      },
    );

    const Element = hasIcon ? 'a' : this.props.as;
    return (
      <Element
        {...rest}
        className={classes || undefined}
        disabled={(disabled && this.props.as === 'button') || undefined}
        onClick={this.handleClick}
        role="button"
        style={inheritedStyle}
        data-uk-icon={hasIcon ? `icon: ${icon}` : undefined}
        {...inheritedAttributes}
      >
        {!hasIcon && children}
      </Element>
    );
  }
}
