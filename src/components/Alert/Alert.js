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
import Close from '../Close/Close';

class Alert extends React.Component {
  static meta = {
    name: 'Alert',
    ukClass: 'uk-alert',
  };

  static propTypes = {
    /**
     * Animation options to apply.
     * @property {boolean|string} [animation=true] If true, uses a fade out animation, otherwise
     *    use options from the Animation component.
     * @property {number} [duration=150] Animation duration in milliseconds.
     */
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

    /** Allow the Alert to be closed. */
    closeable: PropTypes.bool,

    /** Props to apply to the Close component within the Alert. */
    closeOptions: PropTypes.shape({
      className: PropTypes.string,
      large: PropTypes.bool,
    }),

    /** CSS selector for the Close component. */
    closeSelector: PropTypes.string,

    /** Indicates an important or error message. */
    danger: PropTypes.bool,

    /** Give the message a prominent styling. */
    primary: PropTypes.bool,

    /** Indicates success or a positive message. */
    success: PropTypes.bool,

    /** Indicates a message containing a warning. */
    warning: PropTypes.bool,

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Fires before an item is hidden. Can prevent hiding by returning false. */
    onBeforeHide: PropTypes.func,

    /** Fires after an item is hidden. */
    onHide: PropTypes.func,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    closeable: false,
    closeOptions: {
      className: '',
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
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      {
        [buildClassName(Alert.meta.ukClass, 'danger')]: (danger),
        [buildClassName(Alert.meta.ukClass, 'primary')]: (primary),
        [buildClassName(Alert.meta.ukClass, 'success')]: (success),
        [buildClassName(Alert.meta.ukClass, 'warning')]: (warning),
      },
    );

    let animationClass = animation;
    if (animation === true) animationClass = 'fade';
    if (isObjectLike(animation)) animationClass = get(animation, 'name');
    const componentOptions = getOptionsString({
      animation: buildClassName('animation', animationClass),
      duration: get(animation, 'duration', 150),
      selClose: closeSelector,
    });

    const closeClasses = classnames(
      closeOptions.className,
      buildClassName('alert', 'close'),
      {
        [buildClassName('close', 'large')]: (closeOptions.large),
      },
    );

    const Element = getElementType(Alert, as, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        data-uk-alert={componentOptions}
      >
        {(closeable) && <button className={closeClasses} type="button" data-uk-close />}
        {children}
      </Element>
    );
  }
}

export default Alert;
