import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isObject, omit } from 'lodash';
import {
  buildClassName,
} from '../../lib';
import { Block } from '../Base';

export default class TabItem extends Block {
  static meta = {
    name: 'TabItem',
  };

  static propTypes = {
    ...omit(Block.propTypes, 'as'),
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
  };

  static defaultProps = {
    active: false,
    disabled: false,
  };

  render() {
    const {
      active,
      children,
      className,
      disabled,
      href,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      {
        [buildClassName('active')]: (active),
        [buildClassName('disabled')]: (disabled),
      },
    );

    return (
      <li
        {...rest}
        className={classes}
      >
        {(isObject(children)) ? children : <a href={href}>{children}</a>}
      </li>
    );
  }
}
