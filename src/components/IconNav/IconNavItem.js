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
      active,
      className,
      href,
      iconName,
      iconOptions,
      ...rest
    } = this.props;

    const classes = classnames(className, {
      [buildClassName('active')]: active,
    });

    return (
      <BlockElement {...rest} as="li" className={classes || undefined}>
        <Icon {...iconOptions} href={href} name={iconName} />
      </BlockElement>
    );
  }
}
