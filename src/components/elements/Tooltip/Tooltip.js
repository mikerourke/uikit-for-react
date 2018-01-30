import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil, noop } from 'lodash';
import { getOptionsString, UIK } from '../../../lib';
import { EveryElement } from '../../base';

export default class Tooltip extends React.Component {
  static displayName = 'Tooltip';

  static propTypes = {
    ...EveryElement.propTypes,
    alignTo: PropTypes.oneOf([
      'bottom',
      'bottom-left',
      'bottom-right',
      'left',
      'right',
      'top',
      'top-left',
      'top-right',
    ]),
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.arrayOf(UIK.ANIMATIONS),
      PropTypes.shape({
        in: PropTypes.oneOfType([
          PropTypes.oneOf(UIK.ANIMATIONS),
          PropTypes.arrayOf(UIK.ANIMATIONS),
        ]),
        out: PropTypes.oneOfType([
          PropTypes.oneOf(UIK.ANIMATIONS),
          PropTypes.arrayOf(UIK.ANIMATIONS),
        ]),
        duration: PropTypes.number,
      }),
    ]),
    as: EveryElement.asPropType,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    clsActive: PropTypes.string,
    delay: PropTypes.number,
    offset: PropTypes.number,
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    shown: PropTypes.bool,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    ...EveryElement.defaultProps,
    as: 'div',
    className: '',
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
    shown: false,
  };

  componentDidMount() {
    if (!this.ref) return;
    UIkit.util.on(this.ref, 'beforehide', this.props.onBeforeHide);
    UIkit.util.on(this.ref, 'beforeshow', this.props.onBeforeShow);
    UIkit.util.on(this.ref, 'hidden', this.props.onHidden);
    UIkit.util.on(this.ref, 'hide', this.props.onHide);
    UIkit.util.on(this.ref, 'show', this.props.onShow);
    UIkit.util.on(this.ref, 'shown', this.props.onShown);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shown === true && this.props.shown === false) {
      UIkit.tooltip(this.ref).show();
    }

    if (nextProps.shown === false && this.props.shown === true) {
      UIkit.tooltip(this.ref).hide();
    }
  }

  handleRef = element => {
    if (!element) return;
    this.ref = isNil(element.ref) ? element : element.ref;
  };

  render() {
    const {
      alignTo,
      animation,
      className,
      clsActive,
      delay,
      offset,
      onBeforeHide,
      onBeforeShow,
      onHidden,
      onHide,
      onShow,
      onShown,
      shown,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-tooltip');

    const componentOptions = getOptionsString({
      animation,
      cls: clsActive,
      delay,
      offset,
      pos: alignTo,
    });

    return (
      <EveryElement
        {...rest}
        className={classes}
        ref={this.handleRef}
        data-uk-tooltip={componentOptions}
      />
    );
  }
}
