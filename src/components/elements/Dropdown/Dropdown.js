import React, { Fragment } from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import noop from 'lodash/noop';
import {
  addMultipleEventInvokers,
  appendClassNamesToChildren,
  customPropTypes,
  generateSelector,
  getOptionsString,
  HTML,
  joinListProp,
  LibraryComponent,
  UIK,
} from '../../../lib';
import Base from '../../base';
import DropdownBoundary from './DropdownBoundary';

export default class Dropdown extends React.Component {
  static displayName = 'Dropdown';

  static propTypes = {
    ...Base.propTypes,
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
    shown: PropTypes.bool,
    toggle: PropTypes.element,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
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

  static Boundary = DropdownBoundary;

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('dropdown');
  }

  componentDidMount() {
    this.dropdown = UIkit.dropdown(this.libComp.cssSelector);
    const ukToPropsEventMap = {
      beforehide: 'onBeforeHide',
      beforeshow: 'onBeforeShow',
      hidden: 'onHidden',
      hide: 'onHide',
      show: 'onShow',
      shown: 'onShown',
      stack: 'onStack',
      toggle: 'onToggle',
    };
    addMultipleEventInvokers(this.dropdown, ukToPropsEventMap, this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shown === true && this.props.shown === false) {
      this.dropdown.show();
    }
    if (nextProps.shown === false && this.props.shown === true) {
      this.dropdown.hide();
    }
  }

  renderChildren = children =>
    appendClassNamesToChildren(children, {
      Grid: 'uk-dropdown-grid',
      Nav: 'uk-dropdown-nav',
    });

  render() {
    const {
      animation,
      boundaryAlign,
      children,
      className,
      component,
      delayHide,
      delayShow,
      flip,
      mode,
      offset,
      position,
      toggle,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-dropdown');

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
        {!isNil(toggle) && toggle}
        <Base
          {...rest}
          baseRef={this.handleRef}
          className={classes}
          component={component || Dropdown}
          uk-dropdown={componentOptions}
          {...this.libComp.appendProps(this.props)}
        >
          {this.renderChildren(children)}
        </Base>
      </Fragment>
    );
  }
}
