// TODO: Come back to this, it requires some fanagling to get SubNav to work correctly.
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { BlockElement } from '../Base';

export default class NavItem extends BlockElement {
  static displayName = 'NavItem';

  static propTypes = {
    ...BlockElement.propTypes,
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    divider: PropTypes.bool,
    header: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    active: false,
    header: false,
    divider: false,
  };

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const { active, children, className, disabled, ...rest } = unhandledProps;

    const classes = classnames(className, inheritedClasses, {
      [buildClassName('disabled')]: disabled,
    });

    return (
      <li
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {this.renderChildren()}
      </li>
    );
  }
}
