import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { buildClassName, UIK } from '../../lib';
import { BlockElement } from '../Base';
import Icon from '../Icon';

export default class IconNavItem extends BlockElement {
  static meta = {
    name: 'IconNavItem',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    active: PropTypes.bool,
    className: PropTypes.string,
    href: PropTypes.string,
    iconName: PropTypes.oneOf(UIK.ICON_NAMES).isRequired,
    iconOptions: PropTypes.shape(omit(Icon.propTypes, 'name')),
  };

  static defaultProps = {
    active: false,
  };

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      active,
      className,
      href,
      iconName,
      iconOptions,
      ...rest
    } = unhandledProps;

    const classes = classnames(className, inheritedClasses, {
      [buildClassName('active')]: active,
    });

    return (
      <li
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        <Icon {...iconOptions} href={href} name={iconName} />
      </li>
    );
  }
}
