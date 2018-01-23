import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { get, noop } from 'lodash';
import {
  buildClassName,
  getElementType,
  getIfHasChildType,
  getOptionsString,
  UIK,
} from '../../lib';
import { BlockElement } from '../Base';
import Close from '../Close';

/**
 * Display success, warning and error messages.
 * @see https://getuikit.com/docs/alert
 */
export default class Alert extends BlockElement {
  static displayName = 'Alert';

  static propTypes = {
    ...BlockElement.propTypes,
    animation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.shape({
        name: PropTypes.oneOf(UIK.ANIMATIONS),
        duration: PropTypes.number,
      }),
    ]),
    as: BlockElement.asPropType,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    closeable: CustomPropTypes.and([PropTypes.bool, props => {
      if (props.closeable && getIfHasChildType(props.children, Close)) {
        return new Error(
          'You cannot have an instance of Close inside an Alert if the "closeable" prop is true.',
        );
      }
      return null;
    }]),
    closeOptions: PropTypes.shape(Close.propTypes),
    danger: PropTypes.bool,
    onBeforeHide: PropTypes.func,
    onHide: PropTypes.func,
    primary: PropTypes.bool,
    selectorClose: PropTypes.string,
    success: PropTypes.bool,
    warning: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    animation: null,
    as: 'div',
    className: null,
    closeable: false,
    closeOptions: null,
    danger: false,
    onBeforeHide: noop,
    onHide: noop,
    primary: false,
    selectorClose: null,
    success: false,
    warning: false,
  };

  componentDidMount() {
    UIkit.util.on(this.ref, 'beforehide', this.props.onBeforeHide);
    UIkit.util.on(this.ref, 'hide', this.props.onHide);
  }

  handleRef = element => (this.ref = element);

  render() {
    const { animation, ...propsToParse } = this.props;
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(propsToParse);

    const {
      children,
      className,
      closeable,
      closeOptions,
      danger,
      onBeforeHide,
      onHide,
      primary,
      selectorClose,
      success,
      warning,
      ...rest
    } = unhandledProps;

    const ukClass = 'uk-alert';
    const classes = classnames(className, inheritedClasses, ukClass, {
      [buildClassName(ukClass, 'danger')]: danger,
      [buildClassName(ukClass, 'primary')]: primary,
      [buildClassName(ukClass, 'success')]: success,
      [buildClassName(ukClass, 'warning')]: warning,
    });

    const componentOptions = getOptionsString({
      animation,
      selClose: selectorClose,
    });

    const closeClasses = classnames(
      get(closeOptions, 'className', ''),
      buildClassName('alert', 'close'),
      {
        [buildClassName('close', 'large')]: get(closeOptions, 'large'),
      },
    );

    const Element = getElementType(Alert, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        style={inheritedStyle}
        data-uk-alert={componentOptions}
        {...inheritedAttributes}
      >
        {closeable && <Close {...closeOptions} className={closeClasses} />}
        {children}
      </Element>
    );
  }
}
