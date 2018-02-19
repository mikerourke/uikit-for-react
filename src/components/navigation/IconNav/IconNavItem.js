import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  UIK,
} from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';
import { Icon } from '../../elements';

export default class IconNavItem extends React.Component {
  static displayName = 'IconNavItem';

  static propTypes = {
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    href: PropTypes.string,
    iconName: PropTypes.oneOf(UIK.ICON_NAMES).isRequired,
    iconOptions: PropTypes.shape(omit(Icon.propTypes, 'name')),
    margin: Margin.propTypes,
    text: Text.propTypes,
    utility: Utility.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    active: false,
    as: 'li',
    className: '',
    href: '#',
  };

  render() {
    const {
      active,
      as,
      className,
      href,
      flex,
      inverse,
      margin,
      text,
      utility,
      width,
      iconName,
      iconOptions,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
      Width.getClasses(width),
      {
        [buildClassName('active')]: active,
      },
    );

    const Element = getElementType(IconNavItem, as);
    return (
      <Element {...rest} className={classes}>
        <Icon {...iconOptions} href={href} name={iconName} />
      </Element>
    );
  }
}
