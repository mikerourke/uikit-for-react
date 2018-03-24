import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';
import DotNavItem from './DotNavItem';

class DotNav extends React.Component {
  static displayName = 'DotNav';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(DotNavItem),
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
    vertical: false,
  };

  static Item = DotNavItem;

  render() {
    const { className, vertical, ...rest } = this.props;

    const classes = classnames(className, 'uk-dotnav', {
      'uk-dotnav-vertical': vertical,
    });

    return <Base {...rest} className={classes} component={DotNav} />;
  }
}

export default DotNav;
