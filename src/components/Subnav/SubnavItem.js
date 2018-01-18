import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isObject, omit } from 'lodash';
import { buildClassName } from '../../lib';
import { Block } from '../Base';

export default class SubnavItem extends Block {
  static meta = {
    name: 'SubnavItem',
  };

  static propTypes = {
    ...omit(Block.propTypes, 'as'),
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
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
        {(isObject(children)) ? children : <a href={href}>{children}</a>}
      </li>
    );
  }
}
