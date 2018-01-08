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
    /** Element type to display for the button, can be <button> or <a>. */
    as: PropTypes.oneOf(['a', 'button']),

    /** Contents to display in the element. */
    children: PropTypes.node,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Indicates a dangerous or negative action. */
    danger: PropTypes.bool,

    /** Indicates the element is disabled. */
    disabled: PropTypes.bool,

    /** Take up the full width of the parent container. */
    fullWidth: PropTypes.bool,

    /** Name of the icon to display in the button, from the Icon component. */
    icon: PropTypes.string,

    /** Makes a <button> look like an <a> element. */
    link: PropTypes.bool,

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /**
     * Called after user's click.
     * @param {SyntheticEvent} event React's original SyntheticEvent.
     * @param {Object} data Props associated with the element.
     */
    onClick: PropTypes.func,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,

    /** Indicates the primary action. */
    primary: PropTypes.bool,

    /** Indicates an important action. */
    secondary: PropTypes.bool,

    /** Size to apply, can be either "large" or "small". */
    size: PropTypes.oneOf(['large', 'small']),

    /** Applies an alternative, typographic style. */
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
