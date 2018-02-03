import React, { Fragment } from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil, noop } from 'lodash';
import {
  appendClassNamesToChildren,
  buildClassName,
  generateSelector,
  getOptionsString,
  joinListProp,
  UIK,
} from '../../../lib';
import { BlockElement } from '../../base';

export default class Drop extends React.Component {
  static displayName = 'Drop';

  static propTypes = {
    ...BlockElement.propTypes,
    animation: PropTypes.shape({
      name: PropTypes.oneOfType([
        PropTypes.oneOf(UIK.ANIMATIONS),
        PropTypes.arrayOf(UIK.ANIMATIONS),
      ]),
      duration: PropTypes.number,
    }),
    as: BlockElement.asPropType,
    boundaryAlign: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    delayHide: PropTypes.number,
    delayShow: PropTypes.number,
    flip: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['x', 'y'])]),
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
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
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
    this.selector = null;
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

  getRef = () => (isNil(this.ref) ? this.selector : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = isNil(element.ref) ? element : element.ref;
  };

  renderChildren = children =>
    appendClassNamesToChildren(children, {
      Grid: buildClassName('drop', 'grid'),
    });

  render() {
    const {
      animation,
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
      toggle,
      ...rest
    } = this.props;

    this.selector = generateSelector();
    const classes = classnames(className, this.selector, 'uk-drop');

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

    return (
      <Fragment>
        {toggle && toggle}
        <BlockElement
          {...rest}
          className={classes}
          ref={this.handleRef}
          data-uk-drop={componentOptions}
        >
          {this.renderChildren(children)}
        </BlockElement>
      </Fragment>
    );
  }
}
