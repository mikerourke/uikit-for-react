import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { noop } from 'lodash';
import { getOptionsString } from '../../lib';
import { AnyElement } from '../Base';

export default class Sticky extends AnyElement {
  static displayName = 'Sticky';

  static propTypes = {
    ...AnyElement.propTypes,
    animation: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    as: AnyElement.asPropType,
    bottom: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    clsActive: PropTypes.string,
    clsInactive: PropTypes.string,
    media: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    offset: PropTypes.number,
    onActive: PropTypes.func,
    onInactive: PropTypes.func,
    showOnUp: PropTypes.bool,
    target: PropTypes.bool,
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    widthElement: PropTypes.string,
  };

  static defaultProps = {
    ...AnyElement.defaultProps,
    animation: false,
    as: 'div',
    bottom: false,
    className: null,
    clsActive: null,
    clsInactive: null,
    media: null,
    offset: null,
    onActive: noop,
    onInactive: noop,
    showOnUp: false,
    target: false,
    top: null,
    widthElement: null,
  };

  componentDidMount() {
    UIkit.util.on(this.ref, 'active', this.props.onActive);
    UIkit.util.on(this.ref, 'inactive', this.props.onInactive);
  }

  handleRef = element => (this.ref = element);

  render() {
    const { animation, ...propsToParse } = this.props;
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(propsToParse);

    const {
      bottom,
      children,
      className,
      clsActive,
      clsInactive,
      media,
      offset,
      showOnUp,
      target,
      top,
      widthElement,
      ...rest
    } = unhandledProps;

    const classes = classnames(className, inheritedClasses);

    const componentOptions = getOptionsString({
      animation,
      bottom,
      clsActive,
      clsInactive,
      media,
      offset,
      showOnUp,
      target,
      top,
      widthElement,
    });

    return (
      <AnyElement
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        style={inheritedStyle}
        data-uk-sticky={componentOptions}
        {...inheritedAttributes}
      >
        {children}
      </AnyElement>
    );
  }
}
