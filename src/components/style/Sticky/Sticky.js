import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import { isNil, noop } from 'lodash';
import { findChildByType, getOptionsString } from '../../../lib';
import { BaseElement } from '../../base';
import Navbar from '../../navigation/Navbar';

export default class Sticky extends React.Component {
  static displayName = 'Sticky';

  static propTypes = {
    ...BaseElement.propTypes,
    animation: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    as: BaseElement.asPropType,
    bottom: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
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
    ...BaseElement.defaultProps,
    animation: false,
    as: 'div',
    bottom: false,
    className: '',
    onActive: noop,
    onInactive: noop,
    showOnUp: false,
    target: false,
  };

  componentDidMount() {
    if (!this.ref) return;
    UIkit.util.on(this.ref, 'active', this.props.onActive);
    UIkit.util.on(this.ref, 'inactive', this.props.onInactive);
  }

  handleRef = element => {
    if (!element) return;
    this.ref = isNil(element.ref) ? element : element.ref;
  };

  getOptionsForNavbar() {
    const { clsActive, clsInactive, target } = this.props;
    const childNavbar = findChildByType(Navbar);
    if (!childNavbar) return {};
    return {
      clsActive: classnames(clsActive, 'uk-navbar-sticky'),
      clsInactive: childNavbar.props.transparent
        ? classnames(clsInactive, 'uk-navbar-transparent')
        : clsInactive,
      target: classnames(target, 'uk-navbar-container'),
    };
  }

  render() {
    const {
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
      ...rest
    } = this.props;

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
      <BaseElement
        {...rest}
        ref={this.handleRef}
        data-uk-sticky={componentOptions}
      />
    );
  }
}
