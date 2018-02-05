import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { get, isNil, noop } from 'lodash';
import {
  buildClassName,
  customPropTypes,
  generateSelector,
  getBaseRef,
  getElementType,
  getOptionsString,
  hasChildType,
  HTML,
  UIK,
} from '../../../lib';
import { Flex, Margin } from '../../common';
import Close from '../Close';

/**
 * Display success, warning and error messages.
 * @see https://getuikit.com/docs/alert
 */
export default class Alert extends React.Component {
  static displayName = 'Alert';

  static propTypes = {
    animation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.shape({
        name: PropTypes.oneOf(UIK.ANIMATIONS),
        duration: PropTypes.number,
      }),
    ]),
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    closeable: ExtraPropTypes.and([
      PropTypes.bool,
      props => {
        if (props.closeable && hasChildType(props.children, Close)) {
          return new Error(
            'You cannot have an instance of Close inside an Alert if the "closeable" prop is true.',
          );
        }
        return null;
      },
    ]),
    closeOptions: PropTypes.shape(Close.propTypes),
    danger: PropTypes.bool,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    onBeforeHide: PropTypes.func,
    onHide: PropTypes.func,
    primary: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    closeable: false,
    closeOptions: Close.defaultProps,
    danger: false,
    onBeforeHide: noop,
    onHide: noop,
    primary: false,
    success: false,
    warning: false,
  };

  constructor() {
    super();
    this.selector = generateSelector();
  }

  componentDidMount() {
    const ref = this.getRef();
    UIkit.util.on(ref, 'beforehide', this.props.onBeforeHide);
    UIkit.util.on(ref, 'hide', this.props.onHide);
  }

  getRef = () => (isNil(this.ref) ? `.${this.selector}` : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  renderChildren = children =>
    React.Children.map(children, child => {
      if (child.type === Close) {
        return React.cloneElement(child, {
          className: classnames(child.props.className, 'uk-alert-close'),
        });
      }
      return child;
    });

  render() {
    const {
      animation,
      as,
      children,
      className,
      closeable,
      closeOptions,
      danger,
      flex,
      margin,
      onBeforeHide,
      onHide,
      primary,
      success,
      warning,
      ...rest
    } = this.props;

    const ukClass = 'uk-alert';
    const classes = classnames(
      className,
      ukClass,
      this.selector,
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      {
        [buildClassName(ukClass, 'danger')]: danger,
        [buildClassName(ukClass, 'primary')]: primary,
        [buildClassName(ukClass, 'success')]: success,
        [buildClassName(ukClass, 'warning')]: warning,
      },
    );

    const closeClasses = classnames(
      get(closeOptions, 'className', ''),
      buildClassName(ukClass, 'close'),
      {
        [buildClassName('close', 'large')]: get(closeOptions, 'large'),
      },
    );

    const Element = getElementType(Alert, this.props);
    return (
      <Element
        {...rest}
        className={classes}
        ref={this.handleRef}
        data-uk-alert={getOptionsString({ animation })}
      >
        {closeable && <Close {...closeOptions} className={closeClasses} />}
        {this.renderChildren(children)}
      </Element>
    );
  }
}
