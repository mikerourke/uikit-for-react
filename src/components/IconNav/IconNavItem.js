import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, omit } from 'lodash';
import {
  buildClassName,
  UIK,
} from '../../lib';
import { Block } from '../Base';
import Icon from '../Icon';

export default class IconNavItem extends Block {
  static meta = {
    name: 'IconNavItem',
  };

  static propTypes = {
    ...Block.propTypes,
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
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      active,
      className,
      href,
      iconName,
      iconOptions,
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
        <Icon {...iconOptions} href={href} name={iconName} />
      </li>
    );
  }
}
