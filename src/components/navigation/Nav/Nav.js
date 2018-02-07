import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import {
  customPropTypes,
  generateSelector,
  getBaseRef,
  getElementType,
  getOptionsString,
  getValidProps,
  HTML,
  UIK,
} from '../../../lib';
import { Flex, Margin, Width } from '../../common';
import NavDivider from './NavDivider';
import NavHeader from './NavHeader';
import NavItem from './NavItem';
import NavItemGroup from './NavItemGroup';
import NavSubNav from './NavSubNav';

export default class Nav extends React.Component {
  static displayName = 'Nav';

  static propTypes = {
    accordion: PropTypes.bool,
    activeIndex: customPropTypes.validateIndex,
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.arrayOf(UIK.ANIMATIONS),
      PropTypes.shape({
        in: PropTypes.oneOfType([
          PropTypes.oneOf(UIK.ANIMATIONS),
          PropTypes.arrayOf(UIK.ANIMATIONS),
        ]),
        out: PropTypes.oneOfType([
          PropTypes.oneOf(UIK.ANIMATIONS),
          PropTypes.arrayOf(UIK.ANIMATIONS),
        ]),
        duration: ExtraPropTypes.nonNegativeInteger,
      }),
    ]),
    as: customPropTypes.customOrStringElement('ul'),
    center: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    collapsible: PropTypes.bool,
    flex: Flex.propTypes,
    hideOpenAnimation: PropTypes.bool,
    margin: Margin.propTypes,
    multiple: PropTypes.bool,
    primary: PropTypes.bool,
    transition: PropTypes.oneOf(HTML.CSS_EASING),
    width: Width.propTypes,
  };

  static defaultProps = {
    accordion: false,
    activeIndex: 0,
    as: 'ul',
    center: false,
    className: '',
    collapsible: false,
    hideOpenAnimation: false,
    multiple: false,
    primary: false,
  };

  static Divider = NavDivider;
  static Header = NavHeader;
  static Item = NavItem;
  static ItemGroup = NavItemGroup;
  static SubNav = NavSubNav;

  constructor() {
    super();
    this.selector = generateSelector();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeIndex !== this.props.activeIndex) {
      UIkit.nav(this.getRef()).toggle(
        nextProps.activeIndex,
        nextProps.hideOpenAnimation,
      );
    }
  }

  getRef = () => (isNil(this.ref) ? `.${this.selector}` : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  render() {
    const {
      accordion,
      animation,
      as,
      center,
      className,
      collapsible,
      flex,
      margin,
      multiple,
      primary,
      transition,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-nav',
      this.selector,
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-nav-center': center,
        'uk-nav-default': !primary,
        'uk-nav-parent-icon': accordion,
        'uk-nav-primary': primary,
      },
    );

    const componentOptions = getOptionsString({
      animation,
      collapsible,
      multiple,
      transition,
    });

    const Element = getElementType(Nav, as);
    return (
      <Element
        {...getValidProps(Nav, rest)}
        className={classes}
        ref={this.handleRef}
        data-uk-nav={accordion ? componentOptions : undefined}
      />
    );
  }
}
