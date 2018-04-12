import React, { Fragment } from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import noop from 'lodash/noop';
import {
  addMultipleEventInvokers,
  buildClassName,
  customPropTypes,
  getOptionsString,
  HTML,
  joinListProp,
  UIK,
} from '../../lib';
import Base from '../Base';
import Ref from '../Ref';
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
    multiplyWidth: PropTypes.oneOf([2, 3, 4, 5]),
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
    this.ref = null;
    this.dropdown = null;
  }

  componentDidMount() {
    this.dropdown = UIkit.dropdown(this.ref);

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

    const firstGrid = document.querySelector('.uk-grid, [uk-grid]');
    if (firstGrid) {
      firstGrid.classList.add('uk-dropdown-grid');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shown !== this.props.shown) {
      if (nextProps.shown === true) {
        this.dropdown.show();
      }
      if (nextProps.shown === false) {
        this.dropdown.hide();
      }
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      animation,
      boundaryAlign,
      className,
      component,
      delayHide,
      delayShow,
      flip,
      mode,
      multiplyWidth,
      offset,
      position,
      toggle,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-dropdown',
      buildClassName('navbar-dropdown-width', multiplyWidth),
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

    return (
      <Fragment>
        {!isNil(toggle) && toggle}
        <Ref innerRef={this.handleRef}>
          <Base
            {...rest}
            className={classes}
            component={component || Dropdown}
            uk-dropdown={componentOptions}
          />
        </Ref>
      </Fragment>
    );
  }
}
