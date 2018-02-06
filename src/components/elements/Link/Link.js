import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';

export default class Link extends React.Component {
  static displayName = 'Link';

  static propTypes = {
    as: customPropTypes.customOrStringElement('a'),
    children: PropTypes.node,
    className: PropTypes.string,
    muted: PropTypes.bool,
    reset: PropTypes.bool,
    text: PropTypes.bool,
  };

  static defaultProps = {
    as: 'a',
    className: '',
    muted: false,
    reset: false,
    text: false,
  };

  render() {
    const { as, className, muted, reset, text, ...rest } = this.props;

    const ukClass = 'uk-link';
    const classes = classnames(className, {
      [buildClassName(ukClass, 'muted')]: muted,
      [buildClassName(ukClass, 'reset')]: reset,
      [buildClassName(ukClass, 'text')]: text,
    });

    const Element = getElementType(Link, as);
    return <Element {...rest} className={classes} />;
  }
}
