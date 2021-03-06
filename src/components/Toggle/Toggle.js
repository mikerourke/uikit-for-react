import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import noop from 'lodash/noop';
import {
  addMultipleEventInvokers,
  customPropTypes,
  getOptionsString,
  joinListProp,
  UIK,
} from '../../lib';
import Base from '../Base';
import Ref from '../Ref';
import ToggleTarget from './ToggleTarget';
import ToggleTogglable from './ToggleTogglable';

export default class Toggle extends React.Component {
  static displayName = 'Toggle';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('a', 'button'),
    clsToggled: PropTypes.string,
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
    target: PropTypes.string,
    toggleAnimation: PropTypes.oneOfType([
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
    toggled: PropTypes.bool,
    toggleIndex: PropTypes.number,
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

  static Target = ToggleTarget;
  static Togglable = ToggleTogglable;
  static Toggle = this;

  constructor(props) {
    super(props);
    this.ref = null;
    this.toggle = null;
  }

  componentDidMount() {
    this.toggle = UIkit.toggle(this.ref);

    const ukToPropsEventMap = {
      beforehide: 'onBeforeHide',
      beforeshow: 'onBeforeShow',
      hidden: 'onHidden',
      hide: 'onHide',
      show: 'onShow',
      shown: 'onShown',
    };
    addMultipleEventInvokers(this.toggle, ukToPropsEventMap, this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.toggled !== this.props.toggled) {
      this.toggle.toggle();
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      className,
      clsToggled,
      mediaTrigger,
      mode,
      queued,
      toggleAnimation,
      toggled,
      toggleIndex,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-toggle');

    const componentOptions = getOptionsString({
      animation: toggleAnimation,
      cls: clsToggled,
      media: mediaTrigger,
      mode: joinListProp(mode, ','),
      queued,
    });

    return (
      <Ref innerRef={this.handleRef} data-index={toggleIndex}>
        <Base
          {...rest}
          className={classes}
          component={Toggle}
          uk-toggle={componentOptions}
        />
      </Ref>
    );
  }
}
