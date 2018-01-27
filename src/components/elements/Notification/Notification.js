import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import { get, noop, without } from 'lodash';
import { UIK } from '../../../lib';

export default class Notification extends React.Component {
  static displayName = 'Notification';

  static propTypes = {
    children: PropTypes.node.isRequired,
    group: PropTypes.string,
    onClose: PropTypes.func,
    position: PropTypes.oneOf([
      'bottom-center',
      'bottom-left',
      'bottom-right',
      'top-center',
      'top-left',
      'top-right',
    ]),
    shown: PropTypes.bool,
    status: PropTypes.oneOf(without(UIK.STATUS_COLORS, 'muted')),
    timeout: PropTypes.number,
  };

  static defaultProps = {
    group: null,
    onClose: noop,
    position: null,
    shown: false,
    status: null,
    timeout: null,
  };

  componentWillReceiveProps(nextProps) {
    const { children, group, position, status, timeout } = this.props;
    if (nextProps.shown !== this.props.shown) {
      UIkit.notification({
        group,
        message: renderToStaticMarkup(children),
        position,
        status,
        timeout,
      });
    }
  }

  componentDidUpdate() {
    const notifier = document.querySelector('.uk-notification');
    if (notifier) {
      UIkit.util.on(notifier, 'close', get(this.props, 'onClose', noop));
    }
  }

  render() {
    return null;
  }
}
