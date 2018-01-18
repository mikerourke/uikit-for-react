import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { Block } from '../Base';

export default class DotnavItem extends Block {
  static meta = {
    name: 'DotnavItem',
  };

  static propTypes = {
    ...Block.propTypes,
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
  };

  static defaultProps = {
    active: false,
  };

  render() {
    const {
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      active,
      children,
      className,
      href,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      {
        [buildClassName('active')]: (active),
      },
    );

    return (
      <li
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        {...attributes}
      >
        <a href={href}>
          {children}
        </a>
      </li>
    );
  }
}
