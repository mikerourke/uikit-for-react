import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';
import NavbarNav from './NavbarNav';

export default class NavbarSplit extends React.Component {
  static displayName = 'NavbarSplit';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    children: customPropTypes.restrictToChildTypes(NavbarNav),
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    side: PropTypes.oneOf(['left', 'right']).isRequired,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, className, flex, margin, side, width, ...rest } = this.props;

    const classes = classnames(
      className,
      buildClassName('navbar', 'center', side),
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(NavbarSplit, as);
    return <Element {...rest} className={classes} />;
  }
}
