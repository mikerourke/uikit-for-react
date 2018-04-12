import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import isNil from 'lodash/isNil';
import noop from 'lodash/noop';
import without from 'lodash/without';
import { addEventInvoker, UIK } from '../../lib';
import Base from '../Base';

export default class Notification extends React.Component {
  static displayName = 'Notification';

  static propTypes = {
    ...Base.propTypes,
    group: PropTypes.string,
    onClose: PropTypes.func,
    position: PropTypes.oneOf(
      without(UIK.X_Y_POSITIONS, 'center-left', 'center-right'),
    ),
    shown: PropTypes.bool,
    status: PropTypes.oneOf(without(UIK.STATUS_COLORS, 'muted')),
    timeout: PropTypes.number,
    transitionOnClose: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    onClose: noop,
    shown: false,
    transitionOnClose: true,
  };

  static closeAll() {
    UIkit.notification.closeAll();
  }

  constructor(props) {
    super(props);
    this.notification = null;
  }

  componentDidMount() {
    if (this.props.shown === true) this.showNotification();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shown !== this.props.shown) {
      if (nextProps.shown === true) {
        this.showNotification();
      }
      if (nextProps.shown === false) {
        if (this.notification) {
          this.notification.close(this.props.transitionOnClose);
        }
        this.notification = null;
      }
    }
  }

  componentWillUnmount() {
    UIkit.notification.closeAll();
  }

  showNotification = () => {
    if (!isNil(this.notification)) return;

    const { children, group, position, status, timeout } = this.props;
    this.notification = UIkit.notification({
      group,
      message: renderToStaticMarkup(children),
      pos: position,
      status,
      timeout,
    });

    addEventInvoker(this.notification, 'close', 'onClose', this.props, {
      isOnce: true,
    });
  };

  render() {
    return null;
  }
}
