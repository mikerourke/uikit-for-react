import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { invoke } from 'lodash';
import {
  buildClassName,
  getElementType,
  getIfDefaultStyle,
} from '../../lib';
import Root from '../Root';
import ButtonGroup from './ButtonGroup';

export class Button extends Root {
  static meta = {
    name: 'Button',
    ukClass: 'uk-button',
  };

  static propTypes = {
    /** Element type to display for the button, can be <button> or <a>. */
    as: PropTypes.oneOf(['a', 'button']),

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Indicates a dangerous or negative action. */
    danger: PropTypes.bool,

    /** Indicates the element is disabled. */
    disabled: PropTypes.bool,

    /** Makes a <button> look like an <a> element. */
    link: PropTypes.bool,

    /**
     * Called after user's click.
     * @param {SyntheticEvent} event React's original SyntheticEvent.
     * @param {Object} data Props associated with the element.
     */
    onClick: PropTypes.func,

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
      link,
      primary,
      secondary,
      size,
      text,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Button.meta.ukClass,
      buildClassName('button', 'default', getIfDefaultStyle(this.props)),
      buildClassName('button', 'primary', primary),
      buildClassName('button', 'secondary', secondary),
      buildClassName('button', 'danger', danger),
      buildClassName('button', 'text', text),
      buildClassName('button', 'link', link),
      buildClassName('button', size),
      this.getRootClassNames(),
    );

    const Element = getElementType(Button, as);
    return (
      <Element
        {...this.getValidProps(rest)}
        className={classes}
        disabled={(disabled && as === 'button') || undefined}
        onClick={this.handleClick}
        role="button"
      >
        {children}
      </Element>
    );
  }
}

export default Button;
