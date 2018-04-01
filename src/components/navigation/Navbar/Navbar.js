/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import get from 'lodash/get';
import noop from 'lodash/noop';
import {
  addMultipleEventInvokers,
  buildClassName,
  customPropTypes,
  getOptionsString,
  joinListProp,
  LibraryComponent,
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
            'You must specify a <nav> element for the as prop in Navbar if ' +
            'container is true.',
          );
        }
        return null;
      },
    ]),
    boundaryAlign: PropTypes.bool,
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
    container: false,
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

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('navbar');
  }

  componentDidMount() {
    const ukToPropsEventMap = {
      beforehide: 'onBeforeHide',
      beforeshow: 'onBeforeShow',
      hidden: 'onHidden',
      hide: 'onHide',
      show: 'onShow',
      shown: 'onShown',
    };
    addMultipleEventInvokers(
      this.libComp.cssSelector,
      ukToPropsEventMap,
      this.props,
    );
  }

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

    const classes = classnames(className, 'uk-navbar', {
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
        uk-navbar={componentOptions}
        {...this.libComp.appendProps(this.props)}
      >
        <div {...alignProps}>{this.renderChildren(children)}</div>
      </Base>
    );
  }
}
