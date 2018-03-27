import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes } from '../../../lib';

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
    const { className, side, ...rest } = this.props;

    const classes = classnames(
      className,
      buildClassName('navbar', 'center', side),
    );

    return <Base {...rest} className={classes} component={NavbarSplit} />;
  }
}
