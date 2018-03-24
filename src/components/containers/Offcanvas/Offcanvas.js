import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import noop from 'lodash/noop';
import {
  customPropTypes,
  generateSelector,
  getBaseRef,
  getOptionsString,
} from '../../../lib';
import Base from '../../base';

export default class Offcanvas extends React.Component {
  static displayName = 'Offcanvas';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('form'),
    bgClose: PropTypes.bool,
    children: PropTypes.node.isRequired,
    escClose: PropTypes.bool,
    flip: PropTypes.bool,
    mode: PropTypes.oneOf(['none', 'push', 'reveal', 'slide']),
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    overlay: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'form',
    bgClose: true,
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
      bgClose,
      className,
      escClose,
      flip,
      mode,
      overlay,
      ...rest
    } = this.props;

    const classes = classnames(className, this.selector);

    const componentOptions = getOptionsString({
      bgClose,
      escClose,
      flip,
      mode,
      overlay,
    });

    return (
      <Base
        {...rest}
        className={classes}
        component={Offcanvas}
        baseRef={this.handleRef}
        data-uk-offcanvas={componentOptions}
      />
    );
  }
}
