import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import isNil from 'lodash/isNil';
import noop from 'lodash/noop';
import classnames from 'classnames';
import {
  customPropTypes,
  findChildByType,
  generateSelector,
  getBaseRef,
  getOptionsString,
  HTML,
} from '../../../lib';
import Base from '../../base';
import Navbar from '../../navigation/Navbar';

export default class Sticky extends React.Component {
  static displayName = 'Sticky';

  static propTypes = {
    ...Base.propTypes,
    animation: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    bottom: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]),
    children: PropTypes.node,
    clsActive: PropTypes.string,
    clsInactive: PropTypes.string,
    media: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    offset: PropTypes.number,
    onActive: PropTypes.func,
    onInactive: PropTypes.func,
    showOnUp: PropTypes.bool,
    target: PropTypes.bool,
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    widthElement: PropTypes.string,
  };

  static defaultProps = {
    ...Base.defaultProps,
    animation: false,
    as: 'div',
    bottom: false,
    onActive: noop,
    onInactive: noop,
    showOnUp: false,
    target: false,
  };

  constructor() {
    super();
    this.selector = generateSelector();
  }

  componentDidMount() {
    const ref = this.getRef();
    UIkit.util.on(ref, 'active', this.props.onActive);
    UIkit.util.on(ref, 'inactive', this.props.onInactive);
  }

  getOptionsForNavbar() {
    const { children, clsActive, clsInactive, target } = this.props;
    const childNavbar = findChildByType(children, Navbar);
    if (!childNavbar) return {};
    return {
      clsActive: classnames(clsActive, 'uk-navbar-sticky'),
      clsInactive: childNavbar.props.transparent
        ? classnames(clsInactive, 'uk-navbar-transparent')
        : clsInactive,
      target: classnames(target, 'uk-navbar-container'),
    };
  }

  getRef = () => (isNil(this.ref) ? `.${this.selector}` : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  render() {
    const {
      animation,
      bottom,
      className,
      clsActive,
      clsInactive,
      media,
      offset,
      showOnUp,
      target,
      top,
      widthElement,
      ...rest
    } = this.props;

    const classes = classnames(className, this.selector);

    const componentOptions = getOptionsString({
      animation,
      bottom,
      clsActive,
      clsInactive,
      media,
      offset,
      showOnUp,
      target,
      top,
      widthElement,
      ...this.getOptionsForNavbar(),
    });

    return (
      <Base
        {...rest}
        baseRef={this.handleRef}
        className={classes}
        component={Sticky}
        data-uk-sticky={componentOptions}
      />
    );
  }
}
