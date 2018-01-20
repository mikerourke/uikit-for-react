import React, { Fragment } from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, isNil, noop } from 'lodash';
import {
  appendClassNamesToChildren,
  buildClassName,
  getElementType,
  getOptionsString,
  HTML,
  joinListProp,
  UIK,
} from '../../lib';
import { BlockElement } from '../Base';

export default class Dropdown extends BlockElement {
  static meta = {
    name: 'Dropdown',
    ukClass: 'uk-dropdown',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
    boundaryAlign: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    delayHide: PropTypes.number,
    delayShow: PropTypes.number,
    flip: PropTypes.oneOf([true, false, 'x', 'y']),
    mode: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.MODES),
      PropTypes.arrayOf(UIK.MODES),
    ]),
    offset: PropTypes.number,
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    onStack: PropTypes.func,
    onToggle: PropTypes.func,
    position: PropTypes.oneOf(UIK.DROP_POSITIONS),
    selectorBoundary: PropTypes.string,
    selectorToggle: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
    shown: PropTypes.bool,
    toggle: PropTypes.element,
  };

  static defaultProps = {
    as: 'div',
    boundaryAlign: false,
    shown: false,
  };

  componentDidMount() {
    UIkit.util.on(this.ref, 'beforehide', get(this.props, 'onBeforeHide', noop));
    UIkit.util.on(this.ref, 'beforeshow', get(this.props, 'onBeforeShow', noop));
    UIkit.util.on(this.ref, 'hidden', get(this.props, 'onHidden', noop));
    UIkit.util.on(this.ref, 'hide', get(this.props, 'onHide', noop));
    UIkit.util.on(this.ref, 'show', get(this.props, 'onShow', noop));
    UIkit.util.on(this.ref, 'shown', get(this.props, 'onShown', noop));
    UIkit.util.on(this.ref, 'stack', get(this.props, 'onStack', noop));
    UIkit.util.on(this.ref, 'toggle', get(this.props, 'onToggle', noop));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shown === true && this.props.shown === false) {
      UIkit.dropdown(this.ref).show();
    }

    if (nextProps.shown === false && this.props.shown === true) {
      UIkit.dropdown(this.ref).hide();
    }
  }

  handleRef = element => (this.ref = element);

  renderChildren = () => appendClassNamesToChildren(
    this.props.children,
    {
      Grid: buildClassName(Dropdown.meta.ukClass, 'grid'),
      Nav: buildClassName(Dropdown.meta.ukClass, 'nav'),
    },
  );

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      animation,
      as,
      boundaryAlign,
      children,
      className,
      delayHide,
      delayShow,
      flip,
      mode,
      offset,
      onBeforeHide,
      onBeforeShow,
      onHidden,
      onHide,
      onShow,
      onShown,
      onStack,
      onToggle,
      position,
      selectorBoundary,
      selectorToggle,
      toggle,
      ...rest
    } = unhandledProps;

    if (isNil(toggle) && isNil(selectorToggle)) {
      throw new Error('You must specify either a "toggle" element or "selectorToggle" prop.');
    }

    const classes = classnames(
      className,
      inheritedClasses,
      Dropdown.meta.ukClass,
    );

    const componentOptions = getOptionsString({
      animation,
      boundary: selectorBoundary,
      boundaryAlign,
      delayHide,
      delayShow,
      flip,
      mode: joinListProp(mode, ','),
      offset,
      pos: position,
      toggle: selectorToggle,
    });

    const Element = getElementType(Dropdown, this.props);
    return (
      <Fragment>
        {toggle && toggle}
        <Element
          {...rest}
          className={classes}
          ref={this.handleRef}
          style={inheritedStyle}
          data-uk-dropdown={componentOptions}
          {...inheritedAttributes}
        >
          {this.renderChildren()}
        </Element>
      </Fragment>
    );
  }
}
