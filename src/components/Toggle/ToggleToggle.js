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
  LibraryComponent,
  UIK,
} from '../../lib';
import Base from '../Base';

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

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('toggle-toggle');
    this.toggle = null;
  }

  componentDidMount() {
    this.toggle = UIkit.toggle(this.libComp.cssSelector);

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

  render() {
    const {
      animation,
      className,
      clsToggled,
      mediaTrigger,
      mode,
      queued,
      toggled,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-toggle');

    const componentOptions = getOptionsString({
      animation,
      cls: clsToggled,
      media: mediaTrigger,
      mode: joinListProp(mode, ','),
      queued,
    });

    return (
      <Base
        {...rest}
        className={classes}
        component={ToggleToggle}
        uk-toggle={componentOptions}
        {...this.libComp.appendProps(this.props)}
      />
    );
  }
}
