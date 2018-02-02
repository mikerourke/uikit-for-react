import React, { Fragment } from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { isNil, noop } from 'lodash';
import {
  appendClassNamesToChildren,
  buildClassName,
  getOptionsString,
  joinListProp,
  UIK,
} from '../../../lib';
import { BlockElement } from '../../base';

export default class Dropdown extends React.Component {
  static displayName = 'Dropdown';

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
    children: PropTypes.node,
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
    selectorToggle: ExtraPropTypes.mutuallyExclusiveProps(
      PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      'toggle',
      'selectorToggle',
    ),
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

  componentDidMount() {
    if (!this.ref) return;
    UIkit.util.on(this.ref, 'beforehide', this.props.onBeforeHide);
    UIkit.util.on(this.ref, 'beforeshow', this.props.onBeforeShow);
    UIkit.util.on(this.ref, 'hidden', this.props.onHidden);
    UIkit.util.on(this.ref, 'hide', this.props.onHide);
    UIkit.util.on(this.ref, 'show', this.props.onShow);
    UIkit.util.on(this.ref, 'shown', this.props.onShown);
    UIkit.util.on(this.ref, 'stack', this.props.onStack);
    UIkit.util.on(this.ref, 'toggle', this.props.onToggle);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shown === true && this.props.shown === false) {
      UIkit.dropdown(this.ref).show();
    }

    if (nextProps.shown === false && this.props.shown === true) {
      UIkit.dropdown(this.ref).hide();
    }
  }

  handleRef = element => {
    if (!element) return;
    this.ref = isNil(element.ref) ? element : element.ref;
  };

  renderChildren = children =>
    appendClassNamesToChildren(children, {
      Grid: buildClassName('dropdown', 'grid'),
      Nav: buildClassName('dropdown', 'nav'),
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
      selectorBoundary,
      selectorToggle,
      shown,
      toggle,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-dropdown');

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

    return (
      <Fragment>
        {toggle && toggle}
        <BlockElement
          {...rest}
          className={classes}
          ref={this.handleRef}
          data-uk-dropdown={componentOptions}
        >
          {this.renderChildren(children)}
        </BlockElement>
      </Fragment>
    );
  }
}
