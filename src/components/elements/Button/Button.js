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
import { Align, Flex, Margin, Width } from '../../common';
import ButtonGroup from './ButtonGroup';

export default class Button extends React.Component {
  static displayName = 'Button';

  static propTypes = {
    align: Align.propTypes,
    as: customPropTypes.customOrStringElement('a', 'button'),
    children: PropTypes.node,
    className: PropTypes.string,
    close: PropTypes.bool,
    danger: PropTypes.bool,
    disabled: PropTypes.bool,
    flex: Flex.propTypes,
    fullWidth: PropTypes.bool,
    icon: PropTypes.oneOf(UIK.ICON_NAMES),
    link: PropTypes.bool,
    margin: Margin.propTypes,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'small']),
    text: PropTypes.bool,
    width: Width.propTypes,
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
      align,
      as,
      children,
      className,
      danger,
      disabled,
      flex,
      fullWidth,
      icon,
      link,
      margin,
      primary,
      secondary,
      size,
      text,
      width,
      ...rest
    } = this.props;

    const hasDefault =
      UIK.BUTTON_STYLES.reduce(
        (acc, styleName) => (this.props[styleName] ? acc + 1 : acc),
        0,
      ) === 0;
    const hasIcon = !isNil(icon);

    const classes = classnames(
      className,
      Align.getClasses(align),
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      buildClassName('button', size),
      {
        'uk-button': !hasIcon,
        'uk-button-danger': danger,
        'uk-button-default': !hasIcon && hasDefault,
        'uk-button-link': link,
        'uk-button-primary': primary,
        'uk-button-secondary': secondary,
        'uk-button-text': text,
        'uk-icon-button': hasIcon,
        'uk-width-1-1': fullWidth,
      },
    );

    let Element = getElementType(Button, as);
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
