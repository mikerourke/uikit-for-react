// TODO: Come back to this, it requires some fanagling to get SubNav to work correctly.
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { Block } from '../Base';

export default class NavItem extends Block {
  static meta = {
    name: 'NavItem',
  };

  static propTypes = {
    ...Block.propTypes,
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    divider: PropTypes.bool,
    header: PropTypes.bool,
  };

  static defaultProps = {
    active: false,
    header: false,
    divider: false,
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
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      {
        [buildClassName('disabled')]: (disabled),
      },
    );

    return (
      <li
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        {...attributes}
      >
        {this.renderChildren()}
      </li>
    );
  }
}
