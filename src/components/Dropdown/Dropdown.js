import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import UIkit from 'uikit';
import { get, isNil, isPlainObject, noop } from 'lodash';
import {
  appendClassNamesToChildren,
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  getOptionsString,
  HTML,
  joinListProp,
  UIK,
} from '../../lib';

class Dropdown extends React.Component {
  static meta = {
    name: 'Dropdown',
    ukClass: 'uk-dropdown',
  };

  static propTypes = {
    animation: commonPropTypes.animation,
    as: PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
    boundaryAlign: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    delayHide: PropTypes.number,
    delayShow: PropTypes.number,
    flip: PropTypes.oneOf([true, false, 'x', 'y']),
    margin: commonPropTypes.margin,
    mode: PropTypes.oneOfType([
      PropTypes.oneOf(['click', 'hover']),
      PropTypes.arrayOf(['click', 'hover']),
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
    padding: commonPropTypes.padding,
    position: PropTypes.oneOf(UIK.DROP_POSITIONS),
    selectorBoundary: PropTypes.string,
    selectorToggle: PropTypes.bool,
    shown: PropTypes.bool,
    toggle: PropTypes.element,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  componentDidMount() {
    UIkit.util.on(this.ref, 'toggle', get(this.props, 'onToggle', noop));
    UIkit.util.on(this.ref, 'beforeshow', get(this.props, 'onBeforeShow', noop));
    UIkit.util.on(this.ref, 'show', get(this.props, 'onShow', noop));
    UIkit.util.on(this.ref, 'shown', get(this.props, 'onShown', noop));
    UIkit.util.on(this.ref, 'beforehide', get(this.props, 'onBeforeHide', noop));
    UIkit.util.on(this.ref, 'hide', get(this.props, 'onHide', noop));
    UIkit.util.on(this.ref, 'hidden', get(this.props, 'onHidden', noop));
    UIkit.util.on(this.ref, 'stack', get(this.props, 'onStack', noop));
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
      animation,
      as,
      boundaryAlign,
      children,
      className,
      delayHide,
      delayShow,
      flip,
      margin,
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
      padding,
      position,
      selectorBoundary,
      selectorToggle,
      toggle,
      ...rest
    } = this.props;

    if (isNil(toggle) && isNil(selectorToggle)) {
      throw new Error('You must specify either a "toggle" element or "selectorToggle" prop.');
    }

    const classes = classnames(
      className,
      Dropdown.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
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

    const Element = getElementType(Dropdown, as, rest);
    return (
      <Fragment>
        {toggle && toggle}
        <Element
          {...rest}
          className={classes}
          ref={this.handleRef}
          data-uk-dropdown={componentOptions}
        >
          {this.renderChildren()}
        </Element>
      </Fragment>
    );
  }
}

export default Dropdown;
