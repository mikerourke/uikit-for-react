import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Width } from '../../common';
import DotNavItem from './DotNavItem';

class DotNav extends React.Component {
  static displayName = 'DotNav';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(DotNavItem),
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    vertical: PropTypes.bool,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'ul',
    className: '',
    vertical: false,
  };

  static Item = DotNavItem;

  render() {
    const {
      as,
      className,
      flex,
      inverse,
      margin,
      vertical,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-dotnav',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-dotnav-vertical': vertical,
      },
    );

    const Element = getElementType(DotNav, as);
    return <Element {...rest} className={classes} />;
  }
}

export default DotNav;
