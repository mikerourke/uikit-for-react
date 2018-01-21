import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { InlineElement } from '../Base';

export default class Link extends InlineElement {
  static meta = {
    name: 'Link',
    ukClass: 'uk-link',
  };

  static propTypes = {
    ...InlineElement.propTypes,
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
    const { children, className, muted, reset, text, ...rest } = this.props;

    const classes = classnames(className, {
      [buildClassName(Link.meta.ukClass, 'muted')]: muted,
      [buildClassName(Link.meta.ukClass, 'reset')]: reset,
      [buildClassName(Link.meta.ukClass, 'text')]: text,
    });

    return (
      <InlineElement {...rest} as="a" className={classes || undefined}>
        {children}
      </InlineElement>
    );
  }
}
