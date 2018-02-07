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
  getValidProps,
  joinListProp,
  HTML,
  UIK,
} from '../../../lib';
import { Flex, Inverse, Margin, Text, Width } from '../../common';

export default class Drop extends React.Component {
  static displayName = 'Drop';

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
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    delayHide: PropTypes.number,
    delayShow: PropTypes.number,
    flex: Flex.propTypes,
    flip: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['x', 'y'])]),
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
    text: Text.propTypes,
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
    const drop = UIkit.drop(this.getRef());
    if (nextProps.shown === true && this.props.shown === false) {
      drop.show();
    }
    if (nextProps.shown === false && this.props.shown === true) {
      drop.hide();
    }
  }

  getRef = () => (isNil(this.ref) ? `.${this.selector}` : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  renderChildren = children =>
    appendClassNamesToChildren(children, {
      Grid: 'uk-drop-grid',
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
      text,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      this.selector,
      'uk-drop',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
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

    const Element = getElementType(Drop, as);
    return (
      <Fragment>
        {toggle && toggle}
        <Element
          {...getValidProps(Drop, rest)}
          className={classes}
          ref={this.handleRef}
          data-uk-drop={componentOptions}
        >
          {this.renderChildren(children)}
        </Element>
      </Fragment>
    );
  }
}
