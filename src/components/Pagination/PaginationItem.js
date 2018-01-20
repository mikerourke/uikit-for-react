import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { buildClassName } from '../../lib';
import { Block } from '../Base';

export default class PaginationItem extends Block {
  static meta = {
    name: 'PaginationItem',
  };

  static propTypes = {
    ...omit(Block.propTypes, 'as'),
    active: PropTypes.bool,
    children: PropTypes.number,
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
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      active,
      children,
      className,
      disabled,
      href,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      {
        [buildClassName('active')]: (active),
        [buildClassName('disabled')]: (disabled),
      },
    );

    const InnerElement = (active || disabled) ? 'span' : 'a';
    return (
      <li
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        {...attributes}
      >
        <InnerElement href={href}>
          {children}
        </InnerElement>
      </li>
    );
  }
}
