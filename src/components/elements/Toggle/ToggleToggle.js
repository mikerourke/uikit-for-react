import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { isNil, noop } from 'lodash';
import {
  customPropTypes,
  generateSelector,
  getBaseRef,
  getElementType,
  getOptionsString,
  joinListProp,
  UIK,
} from '../../../lib';

export default class ToggleToggle extends React.Component {
  static displayName = 'ToggleToggle';

  static propTypes = {
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
    children: PropTypes.node,
    className: PropTypes.string,
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
    as: 'button',
    className: '',
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
    queued: false,
    toggled: false,
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
      as,
      className,
      classToggled,
      mediaTrigger,
      mode,
      onBeforeHide,
      onBeforeShow,
      onHidden,
      onHide,
      onShow,
      onShown,
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

    const Element = getElementType(ToggleToggle, this.props);
    return (
      <Element
        {...rest}
        className={classes}
        ref={this.handleRef}
        data-uk-toggle={componentOptions}
      />
    );
  }
}
