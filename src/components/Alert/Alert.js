import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import get from 'lodash/get';
import isNil from 'lodash/isNil';
import noop from 'lodash/noop';
import {
  addEventInvoker,
  customPropTypes,
  getOptionsString,
  hasChildType,
  HTML,
  UIK,
} from '../../lib';
import Base from '../Base';
import Ref from '../Ref';
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
    this.ref = null;
  }

  componentDidMount() {
    addEventInvoker(this.ref, 'beforehide', 'onBeforeHide', this.props);
    addEventInvoker(this.ref, 'hide', 'onHide', this.props);

    const firstClose = this.ref.querySelector('.uk-close, [uk-close]');
    if (firstClose) {
      firstClose.classList.add('uk-alert-close');
    }
  }

  handleRef = element => (this.ref = element);

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
      <Ref innerRef={this.handleRef}>
        <Base
          {...rest}
          className={classes}
          component={Alert}
          uk-alert={getOptionsString({ animation })}
        >
          {closeable && <Close {...closeProps} />}
          {!isNil(children) && children}
        </Base>
      </Ref>
    );
  }
}
