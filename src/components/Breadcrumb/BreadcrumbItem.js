import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { Block } from '../Base';

export default class BreadcrumbItem extends Block {
  static meta = {
    name: 'BreadcrumbItem',
  };

  static propTypes = {
    ...Block.propTypes,
    active: PropTypes.bool,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    className: PropTypes.string,
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
        [buildClassName('disabled')]: (disabled),
      },
    );

    const InnerElement = (active) ? 'span' : 'a';
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
