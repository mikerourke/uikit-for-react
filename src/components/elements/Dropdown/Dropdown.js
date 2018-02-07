import React, { Fragment } from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil, noop } from 'lodash';
import {
  appendClassNamesToChildren,
  customPropTypes,
  generateSelector,
  getBaseRef,
  getElementType,
  getOptionsString,
  joinListProp,
  HTML,
  UIK,
  getValidProps,
} from '../../../lib';
import { Flex, Inverse, Margin, Width } from '../../common';

export default class Dropdown extends React.Component {
  static displayName = 'Dropdown';

  static propTypes = {
    animation: PropTypes.shape({
      name: PropTypes.oneOfType([
        PropTypes.oneOf(UIK.ANIMATIONS),
        PropTypes.arrayOf(UIK.ANIMATIONS),
      ]),
      duration: PropTypes.number,
    }),
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    boundaryAlign: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    delayHide: PropTypes.number,
    delayShow: PropTypes.number,
    flex: Flex.propTypes,
    flip: PropTypes.oneOf([true, false, 'x', 'y']),
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
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
    shown: PropTypes.bool,
    toggle: PropTypes.element,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    boundaryAlign: false,
    className: '',
    flip: false,
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
    onStack: noop,
    onToggle: noop,
    shown: false,
  };

  constructor() {
    super();
    this.selector = generateSelector();
  }

  componentDidMount() {
    const ref = this.getRef();
    UIkit.util.on(ref, 'beforehide', this.props.onBeforeHide);
    UIkit.util.on(ref, 'beforeshow', this.props.onBeforeShow);
    UIkit.util.on(ref, 'hidden', this.props.onHidden);
    UIkit.util.on(ref, 'hide', this.props.onHide);
    UIkit.util.on(ref, 'show', this.props.onShow);
    UIkit.util.on(ref, 'shown', this.props.onShown);
    UIkit.util.on(ref, 'stack', this.props.onStack);
    UIkit.util.on(ref, 'toggle', this.props.onToggle);
  }

  componentWillReceiveProps(nextProps) {
    const dropdown = UIkit.dropdown(this.getRef());
    if (nextProps.shown === true && this.props.shown === false) {
      dropdown.show();
    }
    if (nextProps.shown === false && this.props.shown === true) {
      dropdown.hide();
    }
  }

  getRef = () => (isNil(this.ref) ? `.${this.selector}` : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  renderChildren = children =>
    appendClassNamesToChildren(children, {
      Grid: 'uk-dropdown-grid',
      Nav: 'uk-dropdown-nav',
    });

  render() {
    const {
      animation,
      as,
      boundaryAlign,
      children,
      className,
      delayHide,
      delayShow,
      flex,
      flip,
      inverse,
      margin,
      mode,
      offset,
      position,
      toggle,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      this.selector,
      'uk-dropdown',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const componentOptions = getOptionsString({
      animation,
      boundaryAlign,
      delayHide,
      delayShow,
      flip,
      mode: joinListProp(mode, ','),
      offset,
      pos: position,
    });

    const Element = getElementType(Dropdown, as);
    return (
      <Fragment>
        {toggle && toggle}
        <Element
          {...getValidProps(Dropdown, rest)}
          className={classes}
          ref={this.handleRef}
          data-uk-dropdown={componentOptions}
        >
          {this.renderChildren(children)}
        </Element>
      </Fragment>
    );
  }
}
