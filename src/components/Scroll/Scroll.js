import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, noop } from 'lodash';
import { getOptionsString } from '../../lib';
import { InlineElement } from '../Base';

export default class Scroll extends InlineElement {
  static meta = {
    name: 'Scroll',
  };

  static propTypes = {
    ...InlineElement.propTypes,
    children: PropTypes.node,
    className: PropTypes.string,
    duration: PropTypes.number,
    offset: PropTypes.number,
    onBeforeScroll: PropTypes.func,
    onScrolled: PropTypes.func,
    target: PropTypes.string,
  };

  componentDidMount() {
    UIkit.util.on(this.ref, 'scrolled', get(this.props, 'onScrolled', noop));
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
      children,
      className,
      duration,
      offset,
      onScrolled,
      target,
      ...rest
    } = unhandledProps;

    const classes = classnames(className, inheritedClasses);

    const componentOptions = getOptionsString({
      duration,
      offset,
    });

    return (
      <a
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        href={target}
        ref={this.handleRef}
        data-uk-scroll={componentOptions}
        {...inheritedAttributes}
      >
        {children}
      </a>
    );
  }
}
