import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { InlineElement } from '../Base';

export default class Link extends React.Component {
  static displayName = 'Link';

  static propTypes = {
    ...InlineElement.propTypes,
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    muted: PropTypes.bool,
    reset: PropTypes.bool,
    text: PropTypes.bool,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    className: null,
    muted: false,
    reset: false,
    text: false,
  };

  render() {
    const { children, className, muted, reset, text, ...rest } = this.props;

    const ukClass = 'uk-link';
    const classes = classnames(className, {
      [buildClassName(ukClass, 'muted')]: muted,
      [buildClassName(ukClass, 'reset')]: reset,
      [buildClassName(ukClass, 'text')]: text,
    });

    return (
      <InlineElement {...rest} as="a" className={classes || undefined} />
    );
  }
}
