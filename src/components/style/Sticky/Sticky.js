import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import { isNil, noop } from 'lodash';
import classnames from 'classnames';
import {
  customPropTypes,
  findChildByType,
  generateSelector,
  getBaseRef,
  getElementType,
  getOptionsString,
  HTML,
} from '../../../lib';
import { Flex, Inverse, Margin, Text, Width } from '../../common';
import Navbar from '../../navigation/Navbar';

export default class Sticky extends React.Component {
  static displayName = 'Sticky';

  static propTypes = {
    animation: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    bottom: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]),
    children: PropTypes.node,
    className: PropTypes.string,
    clsActive: PropTypes.string,
    clsInactive: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    media: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    offset: PropTypes.number,
    onActive: PropTypes.func,
    onInactive: PropTypes.func,
    showOnUp: PropTypes.bool,
    target: PropTypes.bool,
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    text: Text.propTypes,
    width: Width.propTypes,
    widthElement: PropTypes.string,
  };

  static defaultProps = {
    animation: false,
    as: 'div',
    bottom: false,
    className: '',
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
      as,
      bottom,
      className,
      clsActive,
      clsInactive,
      flex,
      inverse,
      margin,
      media,
      offset,
      showOnUp,
      target,
      top,
      text,
      width,
      widthElement,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      this.selector,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Width.getClasses(width),
    );

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

    const Element = getElementType(Sticky, as);
    return (
      <Element
        {...rest}
        className={classes}
        ref={this.handleRef}
        data-uk-sticky={componentOptions}
      />
    );
  }
}
