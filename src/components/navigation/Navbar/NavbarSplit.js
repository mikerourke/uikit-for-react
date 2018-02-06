import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import NavbarNav from './NavbarNav';

export default class NavbarSplit extends React.Component {
  static displayName = 'NavbarSplit';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    children: customPropTypes.restrictToChildTypes(NavbarNav),
    className: PropTypes.string,
    side: PropTypes.oneOf(['left', 'right']).isRequired,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, className, side, ...rest } = this.props;

    const classes = classnames(
      className,
      buildClassName('navbar', 'center', side),
    );

    const Element = getElementType(NavbarSplit, this.props);
    return <Element {...rest} className={classes} />;
  }
}
