import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Width } from '../../common';
import SubNavItem from './SubNavItem';

export default class SubNav extends React.Component {
  static displayName = 'SubNav';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(SubNavItem),
    className: PropTypes.string,
    divider: PropTypes.bool,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    pill: PropTypes.bool,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'ul',
    className: '',
    divider: false,
    pill: false,
  };

  static Item = SubNavItem;

  render() {
    const {
      as,
      className,
      divider,
      flex,
      inverse,
      margin,
      pill,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-subnav',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-subnav-divider': divider,
        'uk-subnav-pill': pill,
      },
    );

    const Element = getElementType(SubNav, as);
    return <Element {...rest} className={classes} />;
  }
}
