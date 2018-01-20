import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, noop } from 'lodash';
import { getElementType, getOptionsString, HTML, UIK } from '../../lib';
import { AnyElement } from '../Base';

export default class Tooltip extends AnyElement {
  static meta = {
    name: 'Tooltip',
    ukClass: 'uk-tooltip',
  };

  static propTypes = {
    ...AnyElement.propTypes,
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
    as: PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
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
    position: PropTypes.oneOf([
      'bottom',
      'bottom-left',
      'bottom-right',
      'left',
      'right',
      'top',
      'top-left',
      'top-right',
    ]),
    shown: PropTypes.bool,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    as: 'div',
    shown: false,
  };

  componentDidMount() {
    UIkit.util.on(
      this.ref,
      'beforehide',
      get(this.props, 'onBeforeHide', noop),
    );
    UIkit.util.on(
      this.ref,
      'beforeshow',
      get(this.props, 'onBeforeShow', noop),
    );
    UIkit.util.on(this.ref, 'hidden', get(this.props, 'onHidden', noop));
    UIkit.util.on(this.ref, 'hide', get(this.props, 'onHide', noop));
    UIkit.util.on(this.ref, 'show', get(this.props, 'onShow', noop));
    UIkit.util.on(this.ref, 'shown', get(this.props, 'onShown', noop));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shown === true && this.props.shown === false) {
      UIkit.tooltip(this.ref).show();
    }

    if (nextProps.shown === false && this.props.shown === true) {
      UIkit.tooltip(this.ref).hide();
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const { animation, position, ...propsToParse } = this.props;

    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(propsToParse);

    const {
      children,
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
    } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      Tooltip.meta.ukClass,
    );

    const componentOptions = getOptionsString({
      animation,
      cls: clsActive,
      delay,
      offset,
      pos: position,
    });

    const Element = getElementType(Tooltip, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        style={inheritedStyle}
        data-uk-tooltip={componentOptions}
        {...inheritedAttributes}
      >
        {children}
      </Element>
    );
  }
}
