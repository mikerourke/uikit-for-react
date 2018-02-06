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
  HTML,
  UIK,
} from '../../../lib';

export default class Tooltip extends React.Component {
  static displayName = 'Tooltip';

  static propTypes = {
    alignTo: PropTypes.oneOf([
      'bottom',
      'bottom-left',
      'bottom-right',
      'left',
      'right',
      'top',
      'top-left',
      'top-right',
    ]),
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
        duration: PropTypes.number,
      }),
    ]),
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    clsActive: PropTypes.string,
    delay: PropTypes.number,
    offset: PropTypes.number,
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    shown: PropTypes.bool,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
    shown: false,
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

  componentWillReceiveProps(nextProps) {
    const tooltip = UIkit.tooltip(this.getRef());
    if (nextProps.shown === true && this.props.shown === false) {
      tooltip.show();
    }
    if (nextProps.shown === false && this.props.shown === true) {
      tooltip.hide();
    }
  }

  getRef = () => (isNil(this.ref) ? `.${this.selector}` : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  render() {
    const {
      alignTo,
      animation,
      as,
      className,
      clsActive,
      delay,
      offset,
      onBeforeHide,
      onBeforeShow,
      onHidden,
      onHide,
      onShow,
      onShown,
      shown,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-tooltip', this.selector);

    const componentOptions = getOptionsString({
      animation,
      cls: clsActive,
      delay,
      offset,
      pos: alignTo,
    });

    const Element = getElementType(Tooltip, this.props);
    return (
      <Element
        {...rest}
        className={classes}
        ref={this.handleRef}
        data-uk-tooltip={componentOptions}
      />
    );
  }
}
