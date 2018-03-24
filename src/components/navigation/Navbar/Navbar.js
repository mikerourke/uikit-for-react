/* eslint-disable react/forbid-prop-types */
import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import get from 'lodash/get';
import isNil from 'lodash/isNil';
import noop from 'lodash/noop';
import {
  buildClassName,
  customPropTypes,
  generateSelector,
  getBaseRef,
  getOptionsString,
  joinListProp,
  UIK,
} from '../../../lib';
import Base from '../../base';
import NavbarContainer from './NavbarContainer';
import NavbarDropdown from './NavbarDropdown';
import NavbarItem from './NavbarItem';
import NavbarNav from './NavbarNav';
import NavbarSplit from './NavbarSplit';
import NavbarSubtitle from './NavbarSubtitle';
import NavbarToggle from './NavbarToggle';

export default class Navbar extends React.Component {
  static displayName = 'Navbar';

  static propTypes = {
    ...Base.propTypes,
    alignOptions: PropTypes.object,
    alignTo: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS).isRequired,
    as: ExtraPropTypes.and([
      customPropTypes.customOrStringElement('nav', 'div'),
      props => {
        const elementType = get(props, ['as', 'type'], props.as);
        if (props.container === true && elementType !== 'nav') {
          return new Error(
            'You must specify a <nav> element for the as prop in Navbar if container is true.',
          );
        }
        return null;
      },
    ]),
    boundaryAlign: PropTypes.bool,
    children: PropTypes.node,
    container: PropTypes.bool,
    delayHide: PropTypes.number,
    delayShow: PropTypes.number,
    dropbar: PropTypes.bool,
    dropbarMode: PropTypes.oneOf(['push', 'slide']),
    dropdownAlign: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
    duration: PropTypes.number,
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
    transparent: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'nav',
    boundaryAlign: false,
    container: false,
    dropbar: false,
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
    transparent: false,
  };

  static Container = NavbarContainer;
  static Dropdown = NavbarDropdown;
  static Item = NavbarItem;
  static Nav = NavbarNav;
  static Split = NavbarSplit;
  static Subtitle = NavbarSubtitle;
  static Toggle = NavbarToggle;

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
  }

  getRef = () => (isNil(this.ref) ? `.${this.selector}` : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  renderChildren = children =>
    React.Children.map(children, child => {
      if (child.type === NavbarItem) return child;
      return React.cloneElement(child, {
        className: classnames(child.props.className, 'uk-navbar-item'),
      });
    });

  render() {
    const {
      alignOptions,
      alignTo,
      boundaryAlign,
      children,
      className,
      container,
      delayHide,
      delayShow,
      dropbar,
      dropbarMode,
      dropdownAlign,
      duration,
      mode,
      offset,
      transparent,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-navbar', this.selector, {
      'uk-navbar-container': container,
      'uk-navbar-transparent': transparent,
    });

    const alignProps = {
      ...alignOptions,
      className: classnames(
        alignOptions.className,
        buildClassName('navbar', alignTo),
      ),
    };

    const componentOptions = getOptionsString({
      align: dropdownAlign,
      boundaryAlign,
      delayHide,
      delayShow,
      dropbar,
      dropbarMode,
      duration,
      mode: joinListProp(mode, ','),
      offset,
    });

    return (
      <Base
        {...rest}
        baseRef={this.handleRef}
        className={classes}
        component={Navbar}
        data-uk-navbar={componentOptions}
      >
        <div {...alignProps}>{this.renderChildren(children)}</div>
      </Base>
    );
  }
}
