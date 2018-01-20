import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, noop, omit } from 'lodash';
import { getOptionsString } from '../../lib';
import { Inline } from '../Base';

export default class Scroll extends Inline {
  static meta = {
    name: 'Scroll',
  };

  static propTypes = {
    ...omit(Inline.propTypes, 'as'),
    children: PropTypes.node,
    className: PropTypes.string,
    duration: PropTypes.number,
    offset: PropTypes.number,
    onScrolled: PropTypes.func,
    target: PropTypes.string,
  };

  componentDidMount() {
    UIkit.on(this.ref, 'scrolled', get(this.props, 'onScrolled', noop));
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      attributes,
      inlineClasses,
      inlineStyle,
      unhandledProps,
    } = this.getInlineElements(this.props);

    const {
      children,
      className,
      duration,
      offset,
      onScrolled,
      target,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inlineClasses,
    );

    const componentOptions = getOptionsString({
      duration,
      offset,
    });

    return (
      <a
        {...rest}
        className={classes || undefined}
        style={inlineStyle}
        href={target}
        ref={this.handleRef}
        data-uk-scroll={componentOptions}
        {...attributes}
      >
        {children}
      </a>
    );
  }
}
