/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import { customPropTypes, getElementType } from '../../../lib';
import { Align, Flex, Margin, Width } from '../../common';

export default class NavbarToggle extends React.Component {
  static displayName = 'NavbarToggle';

  static propTypes = {
    align: Align.propTypes,
    as: customPropTypes.customOrStringElement('a'),
    className: PropTypes.string,
    flex: Flex.propTypes,
    icon: PropTypes.node,
    margin: Margin.propTypes,
    title: PropTypes.node,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'a',
    className: '',
  };

  render() {
    const {
      align,
      as,
      className,
      flex,
      icon,
      margin,
      title,
      width,
      ...rest
    } = this.props;

    const iconProp = { 'data-uk-navbar-toggle-icon': '' };

    const classes = classnames(
      className,
      'uk-navbar-toggle',
      Align.getClasses(align),
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(NavbarToggle, as);
    if (!isNil(title)) {
      return <Element {...rest} className={classes} {...iconProp} />;
    }

    return (
      <Element {...rest} className={classes}>
        {icon && React.cloneElement(icon, iconProp)}
        {title && title}
      </Element>
    );
  }
}
