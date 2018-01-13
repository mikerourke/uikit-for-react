import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import UIkit from 'uikit';
import { get, noop, without } from 'lodash';
import {
  buildAttributeOptions,
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  getOptionsString,
  hasChildType,
  HTML,
  UIK,
} from '../../lib';
import Close from '../Close';

export default class Alert extends React.Component {
  static meta = {
    name: 'Alert',
    ukClass: 'uk-alert',
  };

  static propTypes = {
    animation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.shape({
        name: PropTypes.oneOf(UIK.ANIMATIONS),
        duration: PropTypes.number,
      }),
    ]),
    as: PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
    background: commonPropTypes.background,
    border: PropTypes.oneOf(['circle', 'rounded']),
    boxShadow: commonPropTypes.boxShadow,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    clearfix: PropTypes.bool,
    closeable: PropTypes.bool,
    closeOptions: PropTypes.shape({
      className: PropTypes.string,
      large: PropTypes.bool,
    }),
    danger: PropTypes.bool,
    display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
    dynamic: PropTypes.bool,
    firstColumn: PropTypes.string,
    float: PropTypes.oneOf(['left', 'right']),
    height: PropTypes.oneOf(['full', ...without(UIK.SIZES, 'xlarge')]),
    heightMatch: commonPropTypes.heightMatch,
    hidden: commonPropTypes.hidden,
    inline: PropTypes.bool,
    inverse: PropTypes.oneOf(['dark', 'light']),
    invisible: PropTypes.oneOf([true, false, 'hover']),
    margin: commonPropTypes.margin,
    maxHeight: PropTypes.oneOf(without(UIK.SIZES, 'xlarge')),
    nextRow: commonPropTypes.nextRow,
    onBeforeHide: PropTypes.func,
    onHide: PropTypes.func,
    overflow: PropTypes.oneOf(['auto', 'hidden']),
    padding: commonPropTypes.padding,
    position: commonPropTypes.position,
    primary: PropTypes.bool,
    resize: PropTypes.oneOf([true, 'vertical']),
    responsive: PropTypes.oneOf([false, 'height', 'width']),
    selectorClose: PropTypes.string,
    success: PropTypes.bool,
    viewport: commonPropTypes.viewport,
    visible: commonPropTypes.visible,
    warning: PropTypes.bool,
    width: commonPropTypes.width,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    closeable: false,
  };

  componentDidMount() {
    UIkit.util.on(this.ref, 'beforehide', get(this.props, 'onBeforeHide', noop));
    UIkit.util.on(this.ref, 'hide', get(this.props, 'onHide', noop));
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      animation,
      as,
      background,
      border,
      boxShadow,
      children,
      className,
      clearfix,
      closeable,
      closeOptions,
      danger,
      display,
      float,
      height,
      hidden,
      inline,
      inverse,
      invisible,
      margin,
      maxHeight,
      onBeforeHide,
      onHide,
      overflow,
      padding,
      position,
      primary,
      resize,
      responsive,
      selectorClose,
      success,
      visible,
      warning,
      width,
      ...rest
    } = this.props;

    if (closeable && hasChildType(children, Close)) {
      throw new Error('You cannot have an instance of Close inside an Alert if the closeable prop is true.');
    }

    const classes = classnames(
      className,
      Alert.meta.ukClass,
      buildObjectOrValueClassNames('background', background),
      buildClassName('border', border),
      buildObjectOrValueClassNames('boxShadow', boxShadow),
      buildClassName('display', display),
      buildClassName('float', float),
      buildClassName((height === 'full') ? ['height', '1', '1'] : ['height', height]),
      buildClassName('height', 'max', maxHeight),
      buildObjectOrValueClassNames('hidden', hidden),
      buildClassName(inverse),
      buildClassName('inline', inline),
      buildClassName('invisible', invisible),
      buildObjectOrValueClassNames('margin', margin),
      buildClassName('overflow', overflow),
      buildObjectOrValueClassNames('padding', padding),
      buildObjectOrValueClassNames('position', position),
      buildClassName('responsive', responsive),
      buildObjectOrValueClassNames('visible', visible),
      buildObjectOrValueClassNames('width', width),
      {
        [buildClassName('clearfix')]: (clearfix),
        [buildClassName(Alert.meta.ukClass, 'danger')]: (danger),
        [buildClassName('preserve', 'width')]: (responsive === false),
        [buildClassName(Alert.meta.ukClass, 'primary')]: (primary),
        [buildClassName('resize')]: (resize),
        [buildClassName(Alert.meta.ukClass, 'success')]: (success),
        [buildClassName(Alert.meta.ukClass, 'warning')]: (warning),
      },
    );

    const componentOptions = getOptionsString({
      animation,
      selClose: selectorClose,
    });

    const closeClasses = classnames(
      closeOptions.className,
      buildClassName('alert', 'close'),
      {
        [buildClassName('close', 'large')]: (closeOptions.large),
      },
    );

    const { dataAttributes, validProps } = buildAttributeOptions(rest);
    const Element = getElementType(Alert, as, rest);
    return (
      <Element
        {...validProps}
        className={classes || undefined}
        ref={this.handleRef}
        data-uk-alert={componentOptions}
        {...dataAttributes}
      >
        {(closeable) && <button className={closeClasses} type="button" data-uk-close />}
        {children}
      </Element>
    );
  }
}
