import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import UIkit from 'uikit';
import { get, isObjectLike, noop } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  getOptionsString,
  hasChildType,
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
    as: PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    closeable: PropTypes.bool,
    closeOptions: PropTypes.shape({
      className: PropTypes.string,
      large: PropTypes.bool,
    }),
    danger: PropTypes.bool,
    margin: commonPropTypes.margin,
    onBeforeHide: PropTypes.func,
    onHide: PropTypes.func,
    padding: commonPropTypes.padding,
    primary: PropTypes.bool,
    selectorClose: PropTypes.string,
    success: PropTypes.bool,
    warning: PropTypes.bool,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    closeable: false,
    closeOptions: {
      className: '',
      large: false,
    },
  };

  componentDidMount() {
    UIkit.util.on(this.ref, 'beforehide', get(this.props, 'onBeforeHide', noop));
    UIkit.util.on(this.ref, 'hide', get(this.props, 'onHide', noop));
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      animation,
      as,
      children,
      className,
      closeable,
      closeOptions,
      danger,
      margin,
      onBeforeHide,
      onHide,
      padding,
      primary,
      selectorClose,
      success,
      warning,
      ...rest
    } = this.props;

    if (closeable && hasChildType(children, Close)) {
      throw new Error('You cannot have an instance of Close inside an Alert if the closeable prop is true.');
    }

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
      duration: get(animation, 'duration'),
      selClose: selectorClose,
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
