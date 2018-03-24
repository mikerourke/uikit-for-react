import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';

import Base from '../../base';
import NavbarNav from './NavbarNav';

export default class NavbarSplit extends React.Component {
  static displayName = 'NavbarSplit';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
    children: customPropTypes.restrictToChildTypes(NavbarNav),

    side: PropTypes.oneOf(['left', 'right']).isRequired,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const {
      as,
      className,

      side,

      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildClassName('navbar', 'center', side),
    );

    const Element = getElementType(NavbarSplit, as);
    return <Element {...rest} className={classes} />;
  }
}
