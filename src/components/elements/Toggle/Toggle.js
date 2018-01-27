import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { isNil, noop } from 'lodash';
import { getOptionsString, joinListProp, UIK } from '../../../lib';
import { InlineElement } from '../../base';

export default class Toggle extends React.Component {
  static displayName = 'Toggle';

  static propTypes = {
    ...InlineElement.propTypes,
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
    as: PropTypes.oneOfType([
      PropTypes.oneOf(['a', 'button']),
      PropTypes.element,
      PropTypes.func,
    ]),
    children: PropTypes.node,
    className: PropTypes.string,
    classToggled: PropTypes.string,
    mediaTrigger: CustomPropTypes.and([
      PropTypes.oneOfType([PropTypes.oneOf(UIK.BREAKPOINTS), PropTypes.number]),
      props => {
        if (props.mode !== 'media') {
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
    target: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    toggled: PropTypes.bool,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    animation: null,
    as: 'button',
    children: null,
    className: null,
    classToggled: null,
    mediaTrigger: null,
    mode: null,
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
    queued: false,
    selectorTarget: null,
    target: null,
    toggled: false,
  };

  componentDidMount() {
    if (!this.ref) return;
    UIkit.util.on(this.ref, 'beforehide', this.props.onBeforeHide);
    UIkit.util.on(this.ref, 'beforeshow', this.props.onBeforeShow);
    UIkit.util.on(this.ref, 'hidden', this.props.onHidden);
    UIkit.util.on(this.ref, 'hide', this.props.onHide);
    UIkit.util.on(this.ref, 'show', this.props.onShow);
    UIkit.util.on(this.ref, 'shown', this.props.onShown);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.toggled !== this.props.toggled) {
      UIkit.toggle(this.ref).toggle();
    }
  }

  handleRef = element => {
    if (!element) return;
    this.ref = isNil(element.ref) ? element : element.ref;
  };

  render() {
    const {
      animation,
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

    const classes = classnames(className, 'uk-toggle');

    const componentOptions = getOptionsString({
      animation,
      cls: classToggled,
      media: mediaTrigger,
      mode: joinListProp(mode, ','),
      queued,
      target: selectorTarget,
    });

    return (
      <InlineElement
        {...rest}
        className={classes}
        ref={this.handleRef}
        data-uk-toggle={componentOptions}
      />
    );
  }
}
