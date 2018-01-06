import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import UIkit from 'uikit';
import { get, isObjectLike, noop } from 'lodash';
import {
  buildClassName, buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  getOptionsString,
  HTML,
  UIK,
} from '../../lib';
import Close from '../Close';

class Alert extends React.Component {
  static meta = {
    name: 'Alert',
    ukClass: 'uk-alert',
  };

  static propTypes = {
    animation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.shape({
        name: PropTypes.oneOf(UIK.ANIMATIONS),
        duration: PropTypes.number,
      }),
    ]),

    /** HTML element to use for the component. */
    as: PropTypes.oneOf(HTML.BLOCK_ELEMENTS),

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    closeable: PropTypes.bool,

    closeOptions: PropTypes.shape(Close.propTypes),

    closeSelector: PropTypes.string,

    /** Indicates an important or error message. */
    danger: PropTypes.bool,

    /** Indicates the primary action. */
    primary: PropTypes.bool,

    /** Indicates success or a positive message. */
    success: PropTypes.bool,

    /** Indicates a message containing a warning. */
    warning: PropTypes.bool,

    margin: commonPropTypes.margin,

    onBeforeHide: PropTypes.func,

    onHide: PropTypes.func,

    padding: commonPropTypes.padding,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    closeable: false,
    closeOptions: {
      as: 'button',
      large: false,
    },
    closeSelector: 'uk-alert-close',
  };


  componentDidMount() {
    UIkit.util.on(this.ref, 'beforehide', get(this.props, 'onBeforeHide', noop));
    UIkit.util.on(this.ref, 'hide', get(this.props, 'onHide', noop));
  }

  handleRef = element => (this.ref = element)

  render() {
    const {
      animation,
      as,
      children,
      className,
      closeable,
      closeOptions,
      closeSelector,
      danger,
      margin,
      onBeforeHide,
      onHide,
      padding,
      primary,
      success,
      warning,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Alert.meta.ukClass,
      buildClassName('alert', 'danger', danger),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      buildClassName('alert', 'primary', primary),
      buildClassName('alert', 'success', success),
      buildClassName('alert', 'warning', warning),
    );

    let animationClass = animation;
    if (animation === true) animationClass = 'fade';
    if (isObjectLike(animation)) animationClass = get(animation, 'name');
    const componentOptions = getOptionsString({
      animation: buildClassName('animation', animationClass),
      duration: get(animation, 'duration', 150),
      selClose: closeSelector,
    });

    const Element = getElementType(Alert, as, rest);
    return (
      <Element
        {...rest}
        className={classes}
        ref={this.handleRef}
        data-uk-alert={componentOptions}
      >
        {(closeable) && <Close {...closeOptions} alert />}
        {children}
      </Element>
    );
  }
}

export default Alert;
