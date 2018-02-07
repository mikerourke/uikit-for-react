import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';
import IconNavItem from './IconNavItem';

export default class IconNav extends React.Component {
  static displayName = 'IconNav';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(IconNavItem),
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    vertical: PropTypes.bool,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'ul',
    className: '',
    vertical: false,
  };

  static Item = IconNavItem;

  render() {
    const {
      as,
      className,
      flex,
      margin,
      vertical,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-iconnav',
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-iconnav-vertical': vertical,
      },
    );

    const Element = getElementType(IconNav, as);
    return <Element {...rest} className={classes} />;
  }
}
