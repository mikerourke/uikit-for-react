import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import noop from 'lodash/noop';
import without from 'lodash/without';
import { UIK } from '../../../lib';
import Base from '../../base';

export default class Notification extends React.Component {
  static displayName = 'Notification';

  static propTypes = {
    ...Base.propTypes,
    children: PropTypes.node,
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
    ...Base.defaultProps,
    group: null,
    onClose: noop,
    position: 'top-center',
    shown: false,
    status: null,
    timeout: 5000,
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
