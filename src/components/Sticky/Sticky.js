import React from 'react';
import UIkit from 'uikit';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { get, noop } from 'lodash';
import {
  getElementType,
  getOptionsString,
} from '../../lib';
import { BlockElement } from '../Base';

export default class Sticky extends BlockElement {
  static meta = {
    name: 'Sticky',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    animation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
    bottom: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    clsActive: PropTypes.string,
    clsInactive: PropTypes.string,
    media: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    offset: PropTypes.number,
    onActive: PropTypes.func,
    onInactive: PropTypes.func,
    showOnUp: PropTypes.bool,
    target: PropTypes.bool,
    top: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    widthElement: PropTypes.string,
  };

  static defaultProps = {
    as: 'div',
  };

  componentDidMount() {
    UIkit.util.on(this.ref, 'active', get(this.props, 'onActive', noop));
    UIkit.util.on(this.ref, 'inactive', get(this.props, 'onInactive', noop));
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      animation,
      as,
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

    const classes = classnames(
      className,
      inheritedClasses,
    );

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

    const Element = getElementType(Sticky, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        style={inheritedStyle}
        data-uk-sticky={componentOptions}
        {...inheritedAttributes}
      >
        {children}
      </Element>
    );
  }
}
