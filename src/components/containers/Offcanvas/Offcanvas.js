import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil, noop } from 'lodash';
import {
  customPropTypes,
  generateSelector,
  getBaseRef,
  getElementType,
  getOptionsString,
  getValidProps,
} from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';

export default class Offcanvas extends React.Component {
  static displayName = 'Offcanvas';

  static propTypes = {
    as: customPropTypes.customOrStringElement('form'),
    bgClose: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    escClose: PropTypes.bool,
    flex: Flex.propTypes,
    flip: PropTypes.bool,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    mode: PropTypes.oneOf(['none', 'push', 'reveal', 'slide']),
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    overlay: PropTypes.bool,
    text: Text.propTypes,
    utility: Utility.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'form',
    bgClose: true,
    className: '',
    escClose: true,
    flip: false,
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
    overlay: false,
  };

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

  render() {
    const {
      as,
      bgClose,
      className,
      escClose,
      flip,
      mode,
      overlay,
      flex,
      inverse,
      margin,
      text,
      utility,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      this.selector,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
      Width.getClasses(width),
    );

    const componentOptions = getOptionsString({
      bgClose,
      escClose,
      flip,
      mode,
      overlay,
    });

    const Element = getElementType(Offcanvas, as);
    return (
      <Element
        {...getValidProps(Offcanvas, rest)}
        className={classes}
        ref={this.handleRef}
        data-uk-offcanvas={componentOptions}
      />
    );
  }
}
