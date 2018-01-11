import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { invoke, isNil } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  getIfDefaultStyle,
} from '../../lib';
import ButtonGroup from './ButtonGroup';

class Button extends React.Component {
  static meta = {
    name: 'Button',
    ukClass: 'uk-button',
  };

  static propTypes = {
    as: PropTypes.oneOf(['a', 'button']),
    children: PropTypes.node,
    className: PropTypes.string,
    danger: PropTypes.bool,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    icon: PropTypes.string,
    link: PropTypes.bool,
    margin: commonPropTypes.margin,
    onClick: PropTypes.func,
    padding: commonPropTypes.padding,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'small']),
    text: PropTypes.bool,
  };

  static defaultProps = {
    as: 'button',
    className: '',
  };

  static Group = ButtonGroup;

  handleClick = (e) => {
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
      margin,
      padding,
      primary,
      secondary,
      size,
      text,
      ...rest
    } = this.props;

    const hasDefault = getIfDefaultStyle(this.props);
    const hasIcon = !isNil(icon);

    const classes = classnames(
      className,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      buildClassName('button', size),
      {
        [Button.meta.ukClass]: (!hasIcon),
        [buildClassName(Button.meta.ukClass, 'danger')]: (danger),
        [buildClassName(Button.meta.ukClass, 'default')]: (!hasIcon && hasDefault),
        [buildClassName(Button.meta.ukClass, 'link')]: (link),
        [buildClassName(Button.meta.ukClass, 'primary')]: (primary),
        [buildClassName(Button.meta.ukClass, 'secondary')]: (secondary),
        [buildClassName(Button.meta.ukClass, 'text')]: (text),
        [buildClassName('icon', 'button')]: (hasIcon),
        [buildClassName('width-1-1')]: (fullWidth),
      },
    );

    const elementType = (hasIcon) ? 'a' : as;
    const Element = getElementType(Button, elementType, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        disabled={(disabled && as === 'button') || undefined}
        onClick={this.handleClick}
        role="button"
        uk-icon={(hasIcon) ? `icon: ${icon}` : undefined}
      >
        {(!hasIcon) && children}
      </Element>
    );
  }
}

export default Button;
