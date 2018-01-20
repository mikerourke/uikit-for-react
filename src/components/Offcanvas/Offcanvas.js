import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, noop } from 'lodash';
import { getOptionsString } from '../../lib';
import { Block } from '../Base';
import Grid from '../Grid';

export default class Offcanvas extends Block {
  static meta = {
    name: 'Offcanvas',
  };

  static propTypes = {
    ...Block.propTypes,
    as: PropTypes.instanceOf(Grid),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    flip: PropTypes.bool,
    mode: PropTypes.oneOf(['none', 'push', 'reveal', 'slide']),
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    overlay: PropTypes.bool,
    selectorContainer: PropTypes.string,
  };

  static defaultProps = {
    flip: false,
    overlay: false,
  };

  componentDidMount() {
    UIkit.util.on(this.ref, 'beforehide', get(this.props, 'onBeforeHide', noop));
    UIkit.util.on(this.ref, 'beforeshow', get(this.props, 'onBeforeShow', noop));
    UIkit.util.on(this.ref, 'hidden', get(this.props, 'onHidden', noop));
    UIkit.util.on(this.ref, 'hide', get(this.props, 'onHide', noop));
    UIkit.util.on(this.ref, 'show', get(this.props, 'onShow', noop));
    UIkit.util.on(this.ref, 'shown', get(this.props, 'onShown', noop));
  }

  render() {
    const {
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      children,
      className,
      flip,
      mode,
      onBeforeHide,
      onBeforeShow,
      onHidden,
      onHide,
      onShow,
      onShown,
      overlay,
      selectorContainer,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
    );

    const componentOptions = getOptionsString({
      container: selectorContainer,
      flip,
      mode,
      overlay,
    });

    return (
      <form
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        data-uk-offcanvas={componentOptions}
        {...attributes}
      >
        {children}
      </form>
    );
  }
}
