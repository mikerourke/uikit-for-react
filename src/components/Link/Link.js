import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { Inline } from '../Base';

export default class Link extends Inline {
  static meta = {
    name: 'Link',
    ukClass: 'uk-link',
  };

  static propTypes = {
    ...Inline.propTypes,
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    muted: PropTypes.bool,
    reset: PropTypes.bool,
    text: PropTypes.bool,
  };

  static defaultProps = {
    muted: false,
    reset: false,
    text: false,
  };

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
      muted,
      reset,
      text,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inlineClasses,
      {
        [buildClassName(Link.meta.ukClass, 'muted')]: (muted),
        [buildClassName(Link.meta.ukClass, 'reset')]: (reset),
        [buildClassName(Link.meta.ukClass, 'text')]: (text),
      },
    );

    return (
      <a
        {...rest}
        className={classes || undefined}
        style={inlineStyle}
        {...attributes}
      >
        {children}
      </a>
    );
  }
}
