import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import UIkit from 'uikit';
import { get, isNil, noop } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  getOptionsString,
  joinListProp,
  HTML,
  UIK,
} from '../../lib';
import Grid from '../Grid';

class Drop extends React.Component {
  static meta = {
    name: 'Drop',
    ukClass: 'uk-drop',
  };

  static propTypes = {
    animation: PropTypes.shape({
      name: PropTypes.oneOfType([
        PropTypes.oneOf(UIK.ANIMATIONS),
        PropTypes.arrayOf(UIK.ANIMATIONS),
      ]),
      duration: PropTypes.number,
    }),
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
    width: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.BASE_WIDTHS),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.BASE_WIDTHS)),
    ]),
  };

  static defaultProps = {
    as: 'div',
    className: '',
    shown: false,
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
      UIkit.drop(this.ref).show();
    }

    if (nextProps.shown === false && this.props.shown === true) {
      UIkit.drop(this.ref).hide();
    }
  }

  handleRef = element => (this.ref = element);

  renderChildren = () => (
    React.Children.map(this.props.children, (child) => {
      if (child.type === Grid) {
        return React.cloneElement(child, {
          className: classnames(
            child.className,
            buildClassName(Drop.meta.ukClass, 'grid'),
          ),
        });
      }
      return child;
    })
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
      width,
      ...rest
    } = this.props;

    if (isNil(toggle) && isNil(selectorToggle)) {
      throw new Error('You must specify either a "toggle" element or "selectorToggle" prop.');
    }

    const classes = classnames(
      className,
      Drop.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      buildObjectOrValueClassNames('width', width),
    );

    const animationNames = get(animation, 'name', []).map(name => (
      buildClassName('animation', name)),
    );
    const componentOptions = getOptionsString({
      animation: joinListProp(animationNames),
      boundary: selectorBoundary,
      boundaryAlign,
      delayHide,
      delayShow,
      duration: get(animation, 'duration'),
      flip,
      mode: joinListProp(mode, ','),
      offset,
      pos: position,
      toggle: selectorToggle,
    });

    const Element = getElementType(Drop, as, rest);
    return (
      <Fragment>
        {toggle && toggle}
        <Element
          {...rest}
          className={classes}
          ref={this.handleRef}
          data-uk-drop={componentOptions}
        >
          {this.renderChildren()}
        </Element>
      </Fragment>
    );
  }
}

export default Drop;
