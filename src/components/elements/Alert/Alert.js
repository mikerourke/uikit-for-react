import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { get, isNil, noop } from 'lodash';
import {
  buildClassName,
  generateSelector,
  getOptionsString,
  hasChildType,
  UIK,
} from '../../../lib';
import { BlockElement } from '../../base';
import Close from '../Close';

/**
 * Display success, warning and error messages.
 * @see https://getuikit.com/docs/alert
 */
export default class Alert extends React.Component {
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
    onBeforeHide: PropTypes.func,
    onHide: PropTypes.func,
    primary: PropTypes.bool,
    selectorClose: PropTypes.string,
    success: PropTypes.bool,
    warning: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: '',
    closeable: false,
    closeOptions: Close.defaultProps,
    danger: false,
    onBeforeHide: noop,
    onHide: noop,
    primary: false,
    selectorClose: '.uk-alert-close',
    success: false,
    warning: false,
  };

  constructor() {
    super();
    this.selector = null;
  }

  componentDidMount() {
    const ref = this.getRef();
    UIkit.util.on(ref, 'beforehide', this.props.onBeforeHide);
    UIkit.util.on(ref, 'hide', this.props.onHide);
  }

  getRef = () => (isNil(this.ref) ? this.selector : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = isNil(element.ref) ? element : element.ref;
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
    } = this.props;

    this.selector = generateSelector();
    const ukClass = 'uk-alert';
    const classes = classnames(className, ukClass, this.selector, {
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
      buildClassName(ukClass, 'close'),
      {
        [buildClassName('close', 'large')]: get(closeOptions, 'large'),
      },
    );

    return (
      <BlockElement
        {...rest}
        className={classes}
        ref={this.handleRef}
        data-uk-alert={componentOptions}
      >
        {closeable && <Close {...closeOptions} className={closeClasses} />}
        {this.renderChildren(children)}
      </BlockElement>
    );
  }
}
