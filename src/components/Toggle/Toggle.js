import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import UIkit from 'uikit';
import { get, isNumber, noop } from 'lodash';
import {
  getElementType,
  getOptionsString,
  joinListProp,
  UIK,
} from '../../lib';
import { Inline } from '../Base';

export default class Toggle extends Inline {
  static meta = {
    name: 'Toggle',
    ukClass: 'uk-toggle',
  };

  static propTypes = {
    ...Inline.propTypes,
    as: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.oneOf(['a', 'button']),
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
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    classToggled: PropTypes.string,
    mediaTrigger: (props, propName) => {
      if (props.mode !== 'media') {
        return new Error('You must specify "media" for the "mode" prop in Toggle component.');
      }
      if (!UIK.BREAKPOINTS.includes(props[propName]) || !isNumber(props[propName])) {
        return new Error(
          'Invalid prop type specified in Toggle component. The value can only be a number or ' +
          'one of the following: @s, @m, @l, @xl.',
        );
      }
      return null;
    },
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
    target: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),
    toggled: PropTypes.bool,
  };

  static defaultProps = {
    as: 'button',
  };

  componentDidMount() {
    UIkit.util.on(this.ref, 'beforeshow', get(this.props, 'onBeforeShow', noop));
    UIkit.util.on(this.ref, 'show', get(this.props, 'onShow', noop));
    UIkit.util.on(this.ref, 'shown', get(this.props, 'onShown', noop));
    UIkit.util.on(this.ref, 'beforehide', get(this.props, 'onBeforeHide', noop));
    UIkit.util.on(this.ref, 'hide', get(this.props, 'onHide', noop));
    UIkit.util.on(this.ref, 'hidden', get(this.props, 'onHidden', noop));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.toggled !== this.props.toggled) {
      UIkit.toggle(this.ref).toggle();
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const { animation } = this.props;

    const {
      attributes,
      inlineClasses,
      inlineStyle,
      unhandledProps,
    } = this.getInlineElements(this.props);

    const {
      children,
      className,
      classToggled,
      mediaTrigger,
      mode,
      queued,
      selectorTarget,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inlineClasses,
      Toggle.meta.ukClass,
    );

    const componentOptions = getOptionsString({
      animation,
      cls: classToggled,
      media: mediaTrigger,
      mode: joinListProp(mode, ','),
      queued,
      target: selectorTarget,
    });

    const Element = getElementType(Toggle, this.props);
    return (
      <Element
        {...rest}
        className={classes}
        ref={this.handleRef}
        style={inlineStyle}
        data-uk-toggle={componentOptions}
        {...attributes}
      >
        {children}
      </Element>
    );
  }
}
