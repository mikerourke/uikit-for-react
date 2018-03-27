import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
import noop from 'lodash/noop';
import {
  addMultipleEventInvokers,
  customPropTypes,
  generateSelector,
  getBaseRef,
  getOptionsString,
  joinListProp,
  UIK,
} from '../../../lib';
import Base from '../../base';

export default class ToggleToggle extends React.Component {
  static displayName = 'ToggleToggle';

  static propTypes = {
    ...Base.propTypes,
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
    as: customPropTypes.customOrStringElement('a', 'button'),
    classToggled: PropTypes.string,
    mediaTrigger: ExtraPropTypes.and([
      PropTypes.oneOfType([PropTypes.oneOf(UIK.BREAKPOINTS), PropTypes.number]),
      props => {
        if (props.mediaTrigger && props.mode !== 'media') {
          return new Error(
            'You must specify "media" for the "mode" prop in Toggle component.',
          );
        }
        return null;
      },
    ]),
    mode: PropTypes.oneOfType([
      PropTypes.oneOf([...UIK.MODES, 'media']),
      PropTypes.arrayOf(UIK.MODES),
    ]),
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    queued: PropTypes.bool,
    selectorTarget: PropTypes.string,
    toggled: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'button',
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
    toggled: false,
  };

  constructor() {
    super();
    this.selector = generateSelector();
  }

  componentDidMount() {
    const ref = this.getRef();
    const ukToPropsEventMap = {
      beforehide: 'onBeforeHide',
      beforeshow: 'onBeforeShow',
      hidden: 'onHidden',
      hide: 'onHide',
      show: 'onShow',
      shown: 'onShown',
    };
    addMultipleEventInvokers(ref, ukToPropsEventMap, this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.toggled !== this.props.toggled) {
      UIkit.toggle(this.getRef()).toggle();
    }
  }

  getRef = () => (isNil(this.ref) ? `.${this.selector}` : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  render() {
    const {
      animation,
      className,
      classToggled,
      mediaTrigger,
      mode,
      queued,
      selectorTarget,
      toggled,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-toggle', this.selector);

    const componentOptions = getOptionsString({
      animation,
      cls: classToggled,
      media: mediaTrigger,
      mode: joinListProp(mode, ','),
      queued,
      target: selectorTarget,
    });

    return (
      <Base
        {...rest}
        baseRef={this.handleRef}
        className={classes}
        component={ToggleToggle}
        uk-toggle={componentOptions}
      />
    );
  }
}
