import React from 'react';
import UIkit from 'uikit';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
  getElementType,
  getOptionsString,
} from '../../lib';
import { Block } from '../Base';

export default class Sticky extends Block {
  static meta = {
    name: 'Sticky',
  };

  static propTypes = {
    ...Block.propTypes,
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
    UIkit.on(this.ref, 'active', this.props.onActive);
    UIkit.on(this.ref, 'inactive', this.props.onInactive);
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

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
      blockClasses,
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
        style={blockStyle}
        data-uk-sticky={componentOptions}
        {...attributes}
      >
        {children}
      </Element>
    );
  }
}
