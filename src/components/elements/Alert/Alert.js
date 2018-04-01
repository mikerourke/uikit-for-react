import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import get from 'lodash/get';
import noop from 'lodash/noop';
import {
  addEventInvoker,
  customPropTypes,
  getOptionsString,
  hasChildType,
  HTML,
  LibraryComponent,
  UIK,
} from '../../../lib';
import Base from '../../base';
import Close from '../Close';

/**
 * Display success, warning and error messages.
 * @see https://getuikit.com/docs/alert
 */
export default class Alert extends React.Component {
  static displayName = 'Alert';

  static propTypes = {
    ...Base.propTypes,
    animation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.shape({
        name: PropTypes.oneOf(UIK.ANIMATIONS),
        duration: PropTypes.number,
      }),
    ]),
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    closeable: ExtraPropTypes.and([
      PropTypes.bool,
      props => {
        if (props.closeable && hasChildType(props.children, Close)) {
          return new Error(
            'You cannot have an instance of Close inside an Alert if the ' +
              '"closeable" prop is true.',
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
    success: PropTypes.bool,
    warning: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
    closeOptions: Close.defaultProps,
    danger: false,
    onBeforeHide: noop,
    onHide: noop,
    primary: false,
    success: false,
    warning: false,
  };

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('alert');
  }

  componentDidMount() {
    const { cssSelector } = this.libComp;
    addEventInvoker(cssSelector, 'beforehide', 'onBeforeHide', this.props);
    addEventInvoker(cssSelector, 'hide', 'onHide', this.props);
  }

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
      primary,
      success,
      warning,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-alert', {
      'uk-alert-danger': danger,
      'uk-alert-primary': primary,
      'uk-alert-success': success,
      'uk-alert-warning': warning,
    });

    const closeProps = {
      ...closeOptions,
      className: classnames(
        get(closeOptions, 'className', ''),
        'uk-alert-close',
        {
          'uk-close-large': get(closeOptions, 'large'),
        },
      ),
    };

    return (
      <Base
        {...rest}
        className={classes}
        component={Alert}
        uk-alert={getOptionsString({ animation })}
        {...this.libComp.appendProps(this.props)}
      >
        {closeable && <Close {...closeProps} />}
        {this.renderChildren(children)}
      </Base>
    );
  }
}
