import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import {
  buildClassName,
  customPropTypes,
  generateSelector,
  getOptionsString,
  HTML,
  UIK,
} from '../../../lib';
import { BlockElement } from '../../base';
import NavDivider from './NavDivider';
import NavHeader from './NavHeader';
import NavItem from './NavItem';
import NavItemGroup from './NavItemGroup';
import NavSubNav from './NavSubNav';

export default class Nav extends React.Component {
  static displayName = 'Nav';

  static propTypes = {
    ...BlockElement.propTypes,
    activeIndex: customPropTypes.validateIndex,
    accordion: PropTypes.bool,
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
    as: customPropTypes.customOrStringChild('ul'),
    center: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    collapsible: PropTypes.bool,
    hideOpenAnimation: PropTypes.bool,
    multiple: PropTypes.bool,
    primary: PropTypes.bool,
    transition: PropTypes.oneOf(HTML.CSS_EASING),
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    activeIndex: 0,
    accordion: false,
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
    this.selector = null;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeIndex !== this.props.activeIndex) {
      UIkit.nav(this.getRef()).toggle(
        nextProps.activeIndex,
        nextProps.hideOpenAnimation,
      );
    }
  }

  getRef = () => (isNil(this.ref) ? this.selector : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = isNil(element.ref) ? element : element.ref;
  };

  render() {
    const {
      activeIndex,
      accordion,
      animation,
      center,
      className,
      collapsible,
      hideOpenAnimation,
      multiple,
      primary,
      transition,
      ...rest
    } = this.props;

    this.selector = generateSelector();
    const ukClass = 'uk-nav';
    const classes = classnames(className, ukClass, this.selector, {
      [buildClassName(ukClass, 'center')]: center,
      [buildClassName(ukClass, 'default')]: !primary,
      [buildClassName(ukClass, 'parent', 'icon')]: accordion,
      [buildClassName(ukClass, 'primary')]: primary,
    });

    const componentOptions = getOptionsString({
      animation,
      collapsible,
      multiple,
      transition,
    });

    return (
      <BlockElement
        {...rest}
        className={classes}
        ref={this.handleRef}
        data-uk-nav={accordion ? componentOptions : undefined}
      />
    );
  }
}
